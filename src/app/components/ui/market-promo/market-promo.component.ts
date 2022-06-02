import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LocalStorage } from '@utils/local-storage';
import { UserSessionCache } from '@services/session.service';
import { DialogService } from '@services/dialog.service';
import { SignInModalComponent } from '@components/modals/sign-in-modal/sign-in-modal.component';

@Component({
	selector: 'app-market-promo',
	templateUrl: './market-promo.component.html',
	styleUrls: ['./market-promo.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketPromoComponent implements OnInit {

	constructor(private dialog: DialogService) { }

	@LocalStorage(true, "user_cache") cache$?: UserSessionCache;

	ngOnInit(): void {
	}

	openSignInModal() {
		this.dialog.openDialog(SignInModalComponent);
	}

}
