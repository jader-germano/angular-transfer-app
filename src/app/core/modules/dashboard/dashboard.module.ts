import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { AppModule } from "../../../app.module";
@NgModule({
	declarations: [DashboardComponent, DashboardContainerComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        DashboardRoutingModule,
        AppModule,
    ],
})
export class DashboardModule {
	static forRoot(): ModuleWithProviders<any> {
		return {
			ngModule: DashboardModule,
		};
	}
}
