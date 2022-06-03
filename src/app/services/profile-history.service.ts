import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProfileHistory } from '@mocks/profile-history';

@Injectable({
	providedIn: 'root'
})
export class ProfileHistoryService {
	items$ = new BehaviorSubject<ProfileHistoryItem[]>(ProfileHistory);

	constructor() { }
}

export interface ProfileHistoryItem {
	address: string,
	materials: string[],
	date: string,
	payout: number
}
