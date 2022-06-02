import { Injectable } from '@angular/core';
import { LocalStorage } from '@utils/local-storage';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class APIService {
	@LocalStorage() token?: string;

	constructor(private http: HttpClient) { }

	login(login: string, password: string) {
		return this.http.post("login", {login, password})
	}

	register({phone, email, password}: {phone: string, email: string, password: string}) {
		return this.http.post("account", {phone_number: phone, email, password})
	}
}
