import { TestBed } from '@angular/core/testing';
import { ErrorHandlerService } from './error-handler.service';

describe(ErrorHandlerService.name, () => {
	let service: ErrorHandlerService;
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ErrorHandlerService
			],
		});
		service = TestBed.get(ErrorHandlerService);
	});
});
