import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DialogService } from '@services/dialog.service';
import { MarketPurchaseModalComponent } from '@components/modals/market-purchase-modal/market-purchase-modal.component';
import { MarketPromocodesService } from '@services/market-promocodes.service';

@Component({
	selector: 'app-profile-promocodes',
	templateUrl: './profile-promocodes.component.html',
	styleUrls: ['./profile-promocodes.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePromocodesComponent implements OnInit {

	constructor(private dialog: DialogService, private promocodes: MarketPromocodesService) { }

	items$ = this.promocodes.items$

	ngOnInit(): void {
	}

	showQRCodeModal() {
		this.dialog.openDialog(MarketPurchaseModalComponent);
	}

}
