import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {SharedModule} from './core/shared/shared.module';
import {RouterOutlet} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {NotFoundComponent} from './core/boundaries/not-found/not-found.component';
import {UnauthorizedComponent} from './core/boundaries/unauthorized/unauthorized.component';
import {UnauthenticatedComponent} from './core/boundaries/unauthenticated/unauthenticated.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Interceptor} from './core/shared/guards/interceptor.module';


@NgModule({
	declarations: [
		AppComponent,
		NotFoundComponent,
		UnauthorizedComponent,
		UnauthenticatedComponent
	],
	imports: [
		RouterOutlet,
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		HttpClientModule,
		Interceptor,
		SharedModule.forRoot(),
		AppRoutingModule,
	],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
	bootstrap: [AppComponent],
})
export class AppModule {
}
