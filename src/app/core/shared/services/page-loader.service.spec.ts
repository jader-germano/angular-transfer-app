import { TestBed } from '@angular/core/testing';
import { PageLoaderService } from './page-loader.service';

describe(PageLoaderService.name, () => {
	let service: PageLoaderService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [PageLoaderService],
		});
		service = TestBed.get(PageLoaderService);
	});
});
