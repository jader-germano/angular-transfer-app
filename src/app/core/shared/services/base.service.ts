import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class BaseService<T> {
	private sub = new BehaviorSubject<T | null>(null);

	constructor() { }

	public getMessage(error: any) {
		if (error.status === 401 || (error.error && error.error.message)) {
			return error.error.message;
		} else {
			return 'Ocorreu um erro durante a operação, tente novamente mais tarde';
		}
	}

	public getStream() {
		return this.sub.asObservable();
	}

	public updateData(data: T) {
		const value = {
			...data,
		};
		this.sub.next(value);
	}

	public getData(): T {
		return this.sub.value;
	}

	public getDataOrFail(): T {
		const value = this.sub.value;
		if (!value) {
			throw new Error('Event not defined');
		}
		return value;
	}

	public resetData(): null {
		this.sub.next(null);
		return null;
	}
}

