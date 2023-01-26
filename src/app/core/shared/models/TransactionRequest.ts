import {Transaction} from './Transaction';

export enum TransferStatus {
	INITIATED,
	IN_PROGRESS,
	SUCCESS,
	FAILED
}
export class TransactionRequest {
	id: number;

	toTransaction: Transaction;

	fromTransaction: Transaction;

	amount: number;

	initiatedAt: Date;

	completedAt: Date;

	transferStatus: TransferStatus;

	// createdAt: Date;
	// updatedAt: Date;

	constructor(id: number, toTransaction: Transaction, fromTransaction: Transaction, amount: number, initiatedAt: Date, completedAt: Date, transferStatus: TransferStatus ) {
		this.id = id;
		this.toTransaction = toTransaction;
		this.fromTransaction = fromTransaction;
		this.amount = amount;
		this.initiatedAt = initiatedAt;
		this.completedAt = completedAt;
		this.transferStatus = transferStatus;
		// this.createdAt = new Date();
		// this.updatedAt = new Date();
	}
}
