import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DialogRef } from '@angular/cdk-experimental/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { APIService } from '@services/api.service';
import { BehaviorSubject } from 'rxjs';
import { DialogService } from '@services/dialog.service';
import { RegisterModalComponent } from '@components/modals/register-modal/register-modal.component';
import { SignInSmsModalComponent } from '@components/modals/sign-in-sms-modal/sign-in-sms-modal.component';

@Component({
	selector: 'app-sign-in-modal',
	templateUrl: './sign-in-modal.component.html',
	styleUrls: ['./sign-in-modal.component.scss', '../global.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInModalComponent implements OnInit {

	constructor(
		private dialogRef: DialogRef<SignInModalComponent>,
		private fb: FormBuilder,
		private API: APIService,
		private dialog: DialogService
	) {
		this.form = this.fb.group({
			phone: new FormControl("", [
				Validators.required, Validators.pattern(/\+?\d+/)
			]),
			password: new FormControl("", [
				Validators.required, Validators.minLength(8)
			])
		})
	}

	form: FormGroup;
	isLoading$ = new BehaviorSubject<boolean>(false);

	ngOnInit(): void {
	}

	close(): void {
		this.dialogRef.close(true);
	}

	openRegisterModal() {
		this.close();
		this.dialog.openDialog(RegisterModalComponent);
	}

	openSignInSMSModal() {
		this.close();
		this.dialog.openDialog(SignInSmsModalComponent);
	}

	onSubmit(): void {
		this.isLoading$.next(true);
		this.API.login(this.form.value.phone, this.form.value.password).subscribe(
			() => {
				this.isLoading$.next(false);
			},
			() => {
				this.isLoading$.next(false);
			}
		)
	}

}
