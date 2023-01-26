import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageLoaderService } from './services/page-loader.service';
import { SharedRoutingModule } from './shared-routing.module';
import { ScrollTrackerDirective } from './directives/scroll-tracker.directive';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
	declarations: [
		ClickOutsideDirective,
		ScrollTrackerDirective,
	],
	imports: [
		CommonModule,
		SharedRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		MatDialogModule,
	],
})
export class SharedModule {
	static forRoot(): ModuleWithProviders<any> {
		return {
			ngModule: SharedModule,
			providers: [
				PageLoaderService,
			]
		};
	}
}
