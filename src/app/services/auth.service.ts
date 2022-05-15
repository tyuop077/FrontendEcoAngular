import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LocalStorage } from '@utils/local-storage';

interface AuthParams {
	login: string;
	password: string;
}

interface User {
	email: string;
	phone_number: string;
	password: string;
	role: string;
}

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	@LocalStorage() user?: any | null;
	@LocalStorage() token?: string | null;

	constructor(
		private http: HttpClient
	) {
	}

	authorize(credentials: AuthParams): Observable<any> {
		return this.http.post('login', credentials);
	}

	registration(data: User): Observable<any> {
		return this.http.post('account', data);
	}

	get isAuthorized(): boolean {
		return this.token !== null;
	}

	saveToStorage(res: any): void {
		this.token = res.access_token;
	}

	getProfile(): Observable<any> {
		return this.http.get('profile');
	}
}
