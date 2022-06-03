import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DialogRef } from '@angular/cdk-experimental/dialog';
import { Random } from '@utils/random';

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

	readonly code = Random.string(8).toUpperCase();

}
