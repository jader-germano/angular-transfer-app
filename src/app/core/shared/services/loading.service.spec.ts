import { TestBed } from '@angular/core/testing';
import { LoadingService } from './loading.service';

describe(LoadingService.name, () => {
	let service: LoadingService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [LoadingService],
		});
		service = TestBed.get(LoadingService);
	});
});
