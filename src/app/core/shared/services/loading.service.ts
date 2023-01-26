import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class LoadingService {
	private active: Subject<boolean> = new Subject<boolean>();
	isActive: Observable<boolean> = this.active.asObservable();

	constructor() {
		this.active.next(false);
	}

	activate(): void {
		this.active.next(true);
	}

	deactivate(): void {
		this.active.next(false);
	}
}
