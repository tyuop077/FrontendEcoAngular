import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MarketPromocodes } from '@mocks/market-promocodes';
import { Random } from '@utils/random';

@Injectable({
	providedIn: 'root'
})
export class MarketPromocodesService {
	items$ = new BehaviorSubject<MarketPromocode[]>(
		MarketPromocodes.map(v => (
			{...v, link: v.link.replace("%", Random.string(60))}
		))
	);

	constructor() { }
}

export interface MarketPromocode {
	expired: boolean,
	discount: number,
	date: string,
	link: string
}
