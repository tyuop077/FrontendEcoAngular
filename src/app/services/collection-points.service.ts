import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CollecionPointsMock } from '../mocks/collectionPoints';

@Injectable({
	providedIn: 'root'
})
export class CollectionPointsService {

	points$ = new BehaviorSubject<RecyclingPoint[]>(CollecionPointsMock);

	constructor() { }
}

export interface RecyclingPoint {
	address: string,
	// "accepts" can be removed and "accepts" from companies could be fetched
	accepts: string,
	image_src: string,
	phone_number: string,
	hours: Record<string, string>,
	companies: {
		name: string,
		// this could be turned into {item: string, from: number}
		accepts: string[]
	}[]
}
