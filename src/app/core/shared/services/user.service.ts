import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	private baseUrl = 'http://localhost:8080/api/users';

	constructor(private http: HttpClient) { }

	createUser(user: User): Observable<User> {
		return this.http.post<User>(`${this.baseUrl}/`, user);
	}

	getUsers(): Observable<User[]> {
		return this.http.get<User[]>(`${this.baseUrl}`);
	}

	getUser(id: number): Observable<User> {
		return this.http.get<User>(`${this.baseUrl}/${id}`);
	}

	updateUser(id: number, value: any): Observable<User> {
		return this.http.put<User>(`${this.baseUrl}/${id}`, value);
	}

	deleteUser(id: number): Observable<User> {
		return this.http.delete<User>(`${this.baseUrl}/${id}`);
	}


}
