import { Component, OnInit, ChangeDetectionStrategy, Inject, Optional } from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk-experimental/dialog';
import { DialogService } from '@services/dialog.service';
import { SignInModalComponent } from '@components/modals/sign-in-modal/sign-in-modal.component';
import { PartnerSignInModalComponent } from '@components/modals/partner-sign-in-modal/partner-sign-in-modal.component';

class DialogData {
	phone!: string;
}

@Component({
	selector: 'app-sign-in-sms-confirmation-modal',
	templateUrl: './sign-in-sms-confirmation-modal.component.html',
	styleUrls: ['./sign-in-sms-confirmation-modal.component.scss', '../global.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInSmsConfirmationModalComponent implements OnInit {

	constructor(
		private dialogRef: DialogRef<SignInSmsConfirmationModalComponent>,
		private dialog: DialogService,
		@Optional() @Inject(DIALOG_DATA) public data: DialogData
	) { }

	ngOnInit(): void {
	}

	close(): void {
		this.dialogRef.close(true);
	}

	openSignInModal() {
		this.close();
		this.dialog.openDialog(SignInModalComponent);
	}

	openPartnerSignInModal() {
		this.close();
		this.dialog.openDialog(PartnerSignInModalComponent);
	}

}
