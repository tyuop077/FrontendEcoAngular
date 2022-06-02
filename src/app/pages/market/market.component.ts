import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
	selector: 'app-market',
	templateUrl: './market.component.html',
	styleUrls: ['./market.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketComponent implements OnInit {

	sort$ = new BehaviorSubject<number>(0);
	gender$ = new BehaviorSubject<string[]>([]);
	categories$ = new BehaviorSubject<string[]>([]);
	shops$ = new BehaviorSubject<string[]>([]);

	constructor() { }

	ngOnInit(): void {
	}

	setSort(index: number) {
		this.sort$.next(index);
	}

	resetFilter() {
		this.gender$.next([]);
		this.categories$.next([]);
		this.shops$.next([]);
	}

}
