import {Account} from './Account';

enum TransactionStatus{
	DEBIT,
	CREDIT
}
export class Transaction {
	id: number;

	account: Account;

	amount: number;

	message: string;

	type: TransactionStatus;

	date: Date;

	// createdAt: Date;
	// updatedAt: Date;

	constructor(id: number, account: Account, amount: number, type: TransactionStatus, date: Date, message: string) {
		this.id = id;
		this.account = account;
		this.amount = amount;
		this.type = type;
		this.date = date;
		this.message = message;
		// this.createdAt = new Date();
		// this.updatedAt = new Date();
	}
}
