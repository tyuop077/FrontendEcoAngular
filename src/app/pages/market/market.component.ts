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
	gender$ = new BehaviorSubject<"MAN" | "WOMAN" | "">("");
	categories$ = new BehaviorSubject<string[]>([]);
	shops$ = new BehaviorSubject<string[]>([]);

	constructor() { }

	ngOnInit(): void {
	}

}
