import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Random } from '@utils/random';
import { DialogService } from '@services/dialog.service';
import { MarketPurchaseModalComponent } from '@components/modals/market-purchase-modal/market-purchase-modal.component';

@Component({
	selector: 'app-profile-promocodes',
	templateUrl: './profile-promocodes.component.html',
	styleUrls: ['./profile-promocodes.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePromocodesComponent implements OnInit {

	constructor(private dialog: DialogService) { }

	readonly code = Random.string(60);

	ngOnInit(): void {
	}

	showQRCodeModal() {
		this.dialog.openDialog(MarketPurchaseModalComponent);
	}

}
