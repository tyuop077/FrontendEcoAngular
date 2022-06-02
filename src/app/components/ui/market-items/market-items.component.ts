import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { MarketItem, MarketService } from '@services/market.service';
import { BehaviorSubject, combineLatest, Observable, Subscription } from 'rxjs';
import { MarketPreviewGenerator } from '@utils/market-preview-generator';

@Component({
	selector: 'app-market-items',
	templateUrl: './market-items.component.html',
	styleUrls: ['./market-items.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketItemsComponent implements OnInit {

	constructor(private marketService: MarketService) { }

	@Input("sort") sort$!: BehaviorSubject<number>;
	@Input("gender") gender$!: BehaviorSubject<string[]>;
	@Input("categories") categories$!: BehaviorSubject<string[]>;
	@Input("shops") shops$!: BehaviorSubject<string[]>;

	private data!: Observable<[MarketItem[], number, string[], string[], string[]]>;

	calculationSubscription$!: Subscription;

	items$ = new BehaviorSubject<MarketItemPreview[]>([]);

	ngOnInit() {
		this.data = combineLatest([
			this.marketService.items$, this.sort$, this.gender$, this.categories$, this.shops$
		]);
		this.calculationSubscription$ = this.data
			.subscribe(([items, sort, gender, categories, shops]) => {
				this.items$.next(items.filter(i => (
					(gender.length === 0 || gender.includes(i.gender)) &&
					(categories.length === 0 || categories.includes(i.type)) &&
					(shops.length === 0 || shops.includes(i.brand))
				)).sort((a, b) => (
					sort === 0 ? b.popularity - a.popularity :
						sort === 1 ? a.price - b.price :
							b.createdAt - a.createdAt
				)).map(i => ({
					name: i.name,
					brand: i.brand,
					label: MarketPreviewGenerator.generateMarketLabel(i),
					price: i.price,
					image_url: i.image_url
				})))
			})
	}

	ngOnDestroy() {
		this.calculationSubscription$.unsubscribe();
	}

}

export interface MarketItemPreview {
	name: string,
	brand: string,
	label: string,
	price: number,
	image_url: string
}
