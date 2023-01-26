import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class MenuService {
	private eventSubject = new BehaviorSubject<boolean>(null);
	
	constructor() {

	}

	public getStream() {
		return this.eventSubject.asObservable();
	}

	public updateData(data: boolean) {
		this.eventSubject.next(data);
	}

	public getData() {
		return this.eventSubject.value;
	}
}
