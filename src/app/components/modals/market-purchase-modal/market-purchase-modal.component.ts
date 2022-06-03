import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DialogRef } from '@angular/cdk-experimental/dialog';

@Component({
	selector: 'app-market-purchase-modal',
	templateUrl: './market-purchase-modal.component.html',
	styleUrls: ['./market-purchase-modal.component.scss', '../global.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketPurchaseModalComponent implements OnInit {

	constructor(private dialogRef: DialogRef<MarketPurchaseModalComponent>) { }

	ngOnInit(): void {
	}

	close(): void {
		this.dialogRef.close(true);
	}

	readonly code = MarketPurchaseModalComponent.randomString(8).toUpperCase();

	static randomString(length: number) {
		let str = "";
		while (str.length < length) {
			str += (Math.random() * 36 | 0).toString(36)
		}
		return str
	}

}
