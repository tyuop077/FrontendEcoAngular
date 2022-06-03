import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DialogService } from '@services/dialog.service';
import { ProfilePromocodesService } from '@services/profile-promocodes.service';
import { ProfilePromocodesQrComponent } from '@components/modals/profile-promocodes-qr/profile-promocodes-qr.component';

@Component({
	selector: 'app-profile-promocodes',
	templateUrl: './profile-promocodes.component.html',
	styleUrls: ['./profile-promocodes.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePromocodesComponent implements OnInit {

	constructor(private dialog: DialogService, private promocodes: ProfilePromocodesService) { }

	items$ = this.promocodes.items$

	ngOnInit(): void {
	}

	showQRCodeModal(link: string) {
		this.dialog.openDialog(ProfilePromocodesQrComponent, {
			data: { link }
		});
	}

}
