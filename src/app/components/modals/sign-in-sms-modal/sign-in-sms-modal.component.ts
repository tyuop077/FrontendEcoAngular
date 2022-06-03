import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DialogRef } from '@angular/cdk-experimental/dialog';
import { DialogService } from '@services/dialog.service';
import { SignInModalComponent } from '@components/modals/sign-in-modal/sign-in-modal.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SignInSmsConfirmationModalComponent } from '@components/modals/sign-in-sms-confirmation-modal/sign-in-sms-confirmation-modal.component';

@Component({
	selector: 'app-sign-in-sms-modal',
	templateUrl: './sign-in-sms-modal.component.html',
	styleUrls: ['./sign-in-sms-modal.component.scss', '../global.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInSmsModalComponent implements OnInit {

	constructor(
		private dialogRef: DialogRef<SignInSmsModalComponent>,
		private dialog: DialogService,
		private fb: FormBuilder
	) {
		this.form = this.fb.group({
			phone: new FormControl("", [
				Validators.required, Validators.pattern(/\+?\d+/)
			])
		})
	}

	form: FormGroup;

	ngOnInit(): void {
	}

	close(): void {
		this.dialogRef.close(true);
	}

	openSignInModal() {
		this.close();
		this.dialog.openDialog(SignInModalComponent);
	}

	onSubmit() {
		this.close();
		this.dialog.openDialog(SignInSmsConfirmationModalComponent, {
			data: {
				phone: this.form.value.phone
			}
		})
	}

}
