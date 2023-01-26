import { HTTP_INTERCEPTORS, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {

	constructor(
		private router: Router,
		private authenticationService: AuthenticationService) {
	}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if (req.url.endsWith('/auth/login')) {
			return next.handle(req);
		}
		const request = req.clone({
			headers: req.headers.set('authorization', `Bearer ${this.authenticationService.getStorage('token')}`),
		});

		return next.handle(request).pipe(
			catchError((error: HttpErrorResponse) => {
				if (error.status === 401) {
					this.authenticationService.clearStorage('loggedUser');
					this.authenticationService.clearStorage('token');
					this.router.navigate(['/login']);
				}
				return throwError(error);
			}));
	}
}

@NgModule({
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: HttpsRequestInterceptor,
			multi: true,
		},
	],
})

export class Interceptor {
}
