import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/boundaries/not-found/not-found.component';
import { UnauthenticatedComponent } from './core/boundaries/unauthenticated/unauthenticated.component';
import { UnauthorizedComponent } from './core/boundaries/unauthorized/unauthorized.component';
import { DashboardComponent } from './core/modules/dashboard/dashboard.component';

export const routes: Routes = [
	{
		path: 'dashboard',
		loadChildren: () =>
			import('./core/modules/dashboard/dashboard.module').then(
				(mod) => mod.DashboardModule
			),
	},
	{ path: '401', component: UnauthorizedComponent },
	{ path: '403', component: UnauthenticatedComponent },
	{ path: '404', component: NotFoundComponent },
	{ path: '**', component: DashboardComponent }
];


@NgModule({
	imports: [RouterModule.forRoot(routes, { enableTracing: false })],
	exports: [RouterModule],
})
export class AppRoutingModule {
}
