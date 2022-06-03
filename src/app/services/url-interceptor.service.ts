import { Injectable } from '@angular/core';
import {
	HttpContextToken, HttpErrorResponse,
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '@environments/environment';

export const StartsWithHttp = new HttpContextToken<boolean>(() => false);

@Injectable({
	providedIn: 'root'
})
export class UrlInterceptorService implements HttpInterceptor {

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(
			request.clone({
				url:
					request.url.startsWith("https") ||
					request.url.startsWith("/") ||
					request.context.get(StartsWithHttp) ||
					request.url.endsWith(".svg")
						? request.url
						: [environment.apiUrl, request.url].join('/'),
			}),
		).pipe(
			tap(
				null,
				(err) => {
					if (err instanceof HttpErrorResponse) {
						if (err.status == 401)
							console.log('Unauthorized')
					}
				}
			)
		);
	}
}
