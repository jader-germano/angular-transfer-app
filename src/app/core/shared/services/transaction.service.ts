import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {TransactionRequest} from '../models/TransactionRequest';
import {Transaction} from '../models/Transaction';

@Injectable({
	providedIn: 'root'
})
export class TransactionService {

	private baseUrl = 'http://localhost:8080/api/transactions';

	constructor(private http: HttpClient) { }


	makeTransfer(transferRequest: TransactionRequest): Observable<TransactionRequest> {
		return this.http.post<TransactionRequest>(`${this.baseUrl}/transfer`, transferRequest);
	}

	getExtract(userId: number): Observable<Transaction[]> {
		return this.http.get<Transaction[]>(`${this.baseUrl}/extract/${userId}`);
	}

}
