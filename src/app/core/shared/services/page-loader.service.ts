import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class PageLoaderService {
	private loading: boolean;
	private loadingSub: Subject<boolean>;
	public loading$: Observable<boolean>;

	constructor() {
		this.loading = false;
		this.loadingSub = new Subject<boolean>();
		this.loading$ = this.loadingSub
			.asObservable()
			.pipe(map((_loading) => (this.loading = _loading)));
	}

	setLoading(): void {
		this.loadingSub.next(true);
	}

	setCompleted(): void {
		this.loadingSub.next(false);
	}
}
