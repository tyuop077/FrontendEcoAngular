import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '@services/auth.service';
import { Router } from '@angular/router';
import { ToastService } from '@services/toast.service';
import { StartsWithHttp } from '@services/url-interceptor.service';
import { catchError } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})

export class AuthInterceptorService implements HttpInterceptor {
	constructor(private auth: AuthService, private router: Router, private toast: ToastService) {}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(this.addToken(request));
	}

	addToken(request: HttpRequest<any>): HttpRequest<any> {
		const headers =
			this.auth?.token && !request.context.get(StartsWithHttp)
				? request.headers.set('Authorization', `Bearer ${this.auth.token}`)
				: request.headers;

		return request.clone({
			headers
		});
	}
}
