import { Injectable } from '@angular/core';
import {
	HttpErrorResponse,
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
	HttpResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LocalStorage } from '@utils/local-storage';
import { ToastService } from '@services/toast.service';
import { environment } from '@environments/environment';
import { Dialog } from '@angular/cdk-experimental/dialog';

@Injectable({
	providedIn: 'root'
})
export class SessionService implements HttpInterceptor {
	@LocalStorage() token?: string;
	@LocalStorage(true, "user_cache") cache?: UserSessionCache;

	constructor(private toast: ToastService, private dialog: Dialog) { }

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if (!request.url.startsWith(environment.apiUrl)) return next.handle(request);
		return next.handle(
			request.clone({
				setHeaders: {
					...this.token ? {
						authorization: `Bearer ${this.token}`
					} : {}
				}
			})
		).pipe(
			tap(
				(event) => {
					if (!(event instanceof HttpResponse)) return;
					if (!request.url.startsWith(environment.apiUrl)) return;
					const body = event.clone().body;
					if (body?.token) {
						this.token = body.token;
						this.cache = {
							display_name: body.firstname ?? body.username ?? body.email,
							avatar_url: body.photo_url,
							balance: body.balance ?? 0,
							full_name: [body.firstname, body.lastname].filter(l => l).join(" ") ?? null,
							phone: body.phone ?? null,
							email: body.email ?? null
						}
						this.toast.success(`Авторизован как ${this.cache.display_name}`);
						this.dialog.closeAll();
					}
				},
				(err) => {
					if (err instanceof HttpErrorResponse) {
						if (err.status === 401) {
							this.toast.error("Необходима авторизация");
							this.token = undefined;
						}
					}
				}
			)
		)
	}
}

export interface UserSessionCache {
	display_name: string,
	avatar_url?: string,
	balance: number,
	full_name: string,
	phone: string,
	email: string
}
