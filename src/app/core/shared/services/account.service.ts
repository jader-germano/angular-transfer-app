import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../models/Account';

@Injectable({
	providedIn: 'root'
})
export class AccountService {

	private baseUrl = 'http://localhost:8080/api/account';

	constructor(private http: HttpClient) { }

	getAccount(id: number): Observable<Account> {
		return this.http.get<Account>(`${this.baseUrl}/${id}`);
	}

	updateAccount(id: number, value: any): Observable<Account> {
		return this.http.put<Account>(`${this.baseUrl}/${id}`, value);
	}

	deleteAccount(id: number): Observable<Account> {
		return this.http.delete<Account>(`${this.baseUrl}/${id}`);
	}
}
