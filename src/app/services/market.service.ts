import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MarketItems } from '@mocks/market';

@Injectable({
	providedIn: 'root'
})
export class MarketService {
	items$ = new BehaviorSubject<MarketItem[]>(MarketItems);

	constructor() { }
}

export interface MarketItem {
	name: string,
	brand: string,
	gender: "MAN" | "WOMAN" | "",
	type: string,
	price: number,
	image_url: string,
	popularity: number,
	createdAt: number
}
