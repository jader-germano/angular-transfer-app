import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ErrorHandlerService } from './error-handler.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { BaseService } from './base.service';
import {User} from '../models/User';

export interface UserPermissions {
	userTypes: string[];
	addUserPermission: boolean;
}

@Injectable({
	providedIn: 'root',
})
export class AuthenticationService extends BaseService<User> {
	private BASE_PATH = `${environment.baseUrl}`;
	private _currentUserSubject: BehaviorSubject<User>;
	public currentUser: Observable<User>;

	public get currentUserVal(): User {
		return this._currentUserSubject.value;
	}

	get currentUserToken() {
		return this.currentUserVal && this.currentUserVal.token;
	}

	constructor(
		private http: HttpClient,
		private router: Router,
		@Inject(SESSION_STORAGE) private storage: StorageService,
		private errorHandlerService: ErrorHandlerService
	) {
		super();
		this._currentUserSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
		this.currentUser = this._currentUserSubject.asObservable();
	}

	public login(email: string, password: string) {
		return this.http
			.post<{ user: User; }>(
				`${this.BASE_PATH}/auth/login`,
				{
					email,
					password,
				},
				{
					responseType: 'json',
				}
			)
			.pipe(map((result) => result))
			.pipe(
				catchError((error) => {
					const message = this.errorHandlerService.getMessage(error);
					// this.toastService.sendError(new ErrorMessage(message));
					return throwError(error);
				})
			);
	}

	public changePasswordRequest(email: string) {
		return this.http
			.post(
				`${this.BASE_PATH}/mail/sendMailResetPassword/`,
				{ email },
				{ responseType: 'json' }
			)
			.pipe(
				catchError((error) => {
					return throwError(error);
				})
			);
	}

	public changePassword(newPassword: string, user: User): Observable<void> {
		return this.http
			.post(
				`${environment.baseUrl}/profile/resetPassword/${user.id}`,
				{ newPassword },
				{ responseType: 'json' }
			)
			.pipe(
				map(() => {
					this.setStorage('loggedUser', JSON.stringify(user));
					return null;
				})
			)
			.pipe(
				catchError((error) => {
					const message = this.errorHandlerService.getMessage(error);
					// this.toastService.sendError(new ErrorMessage(message));

					return throwError(error);
				})
			);
	}

	public mustChangePassword(): boolean {
		const needChangePassword = this.getStorage('needChangePassword');
		return needChangePassword === 'true';
	}

	public logout() {
		this.clearStorage('token');
		this.clearStorage('loggedUser');
		this._currentUserSubject.next(null);
		this.router.navigate(['/login']);
	}

	public getUserFromLocalStorage(): User {
		try {
			const loggedUser = this.storage.get('loggedUser');
			if (loggedUser) {
				return JSON.parse(loggedUser);
			}
		} catch (error) {
			return null;
		}
	}

	public getLoggedUser(): User {
		let person: User;
		const loggedUser = this.storage.get('loggedUser');
		if (loggedUser) {
			person = JSON.parse(loggedUser);
		}
		return new User(person.id, person.name, person.cpf, person.email, person.password, person.token);
	}

	public validateRecaptcha(recaptcha: string) {
		return this.http
			.post(
				`${environment.baseUrl}/recaptcha/validate`,
				{ recaptcha },
				{ responseType: 'json' }
			)
			.pipe(
				catchError((error) => {
					const message = this.errorHandlerService.getMessage(error);
					// this.toastService.sendError(new ErrorMessage(message));
					return throwError(error);
				})
			);
	}

	public verifyToken(email: string, token: string): Observable<Object> {
		return this.http
			.post(
				`${environment.baseUrl}/auth/verifyToken/${email}`,
				{ token },
				{ responseType: 'json' }
			)
			.pipe(map((res) => res))
			.pipe(
				catchError((error) => {
					const message = this.errorHandlerService.getMessage(error);
					// this.toastService.sendError(new ErrorMessage(message));
					return throwError(error);
				})
			);
	}

	public changeUserPassword(email: string, newPassword: string): Observable<Object> {
		return this.http
			.post(
				`${environment.baseUrl}/user/resetPassword/${email}`,
				{ newPassword },
				{ responseType: 'json' }
			)
			.pipe(map((res) => res))
			.pipe(
				catchError((error) => {
					const message = this.errorHandlerService.getMessage(error);
					// this.toastService.sendError(new ErrorMessage(message));
					return throwError(error);
				})
			);
	}

	public setStorage(key: string, value: string) {
		this.storage.set(key, value);
	}

	public getStorage(key: string) {
		return this.storage.get(key);
	}

	public clearStorage(key: string) {
		this.storage.remove(key);
	}

	public updateUser(data: User) {
		const value = {
			...data,
		};
		if (value instanceof User) {
			this._currentUserSubject.next(value);
		}
	}
}
