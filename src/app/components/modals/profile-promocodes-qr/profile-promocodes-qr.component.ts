import { Component, OnInit, ChangeDetectionStrategy, Optional, Inject } from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk-experimental/dialog';

class DialogData {
	link!: string
}

@Component({
	selector: 'app-profile-promocodes-qr',
	templateUrl: './profile-promocodes-qr.component.html',
	styleUrls: ['./profile-promocodes-qr.component.scss', '../global.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePromocodesQrComponent implements OnInit {

	constructor(
		private dialogRef: DialogRef<ProfilePromocodesQrComponent>,
		@Optional() @Inject(DIALOG_DATA) public data: DialogData
	) { }

	ngOnInit(): void {
	}

	close(): void {
		this.dialogRef.close(true);
	}

}
