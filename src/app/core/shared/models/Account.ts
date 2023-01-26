import {User} from './User';

export class Account {
	id: number;

	user: User;

	accountNumber: number;

	digit: number;

	balance: number;

	// createdAt: Date;
	// updatedAt: Date;

	constructor(id: number, user: User, accountNumber: number, digit: number, balance: number) {
		this.id = id;
		this.user = user;
		this.accountNumber = accountNumber;
		this.digit = digit;
		this.balance = balance;
		// this.createdAt = new Date();
		// this.updatedAt = new Date();
	}
}
