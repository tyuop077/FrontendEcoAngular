import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProfilePromocodes } from '@mocks/profile-promocodes';
import { Random } from '@utils/random';

@Injectable({
	providedIn: 'root'
})
export class ProfilePromocodesService {
	items$ = new BehaviorSubject<ProfilePromocode[]>(
		ProfilePromocodes.map(v => (
			{...v, link: v.link.replace("%", Random.string(60))}
		))
	);

	constructor() { }
}

export interface ProfilePromocode {
	expired: boolean,
	discount: number,
	date: string,
	link: string
}
