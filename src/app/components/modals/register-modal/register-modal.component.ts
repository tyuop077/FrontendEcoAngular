import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DialogRef } from '@angular/cdk-experimental/dialog';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { APIService } from '@services/api.service';
import { BehaviorSubject } from 'rxjs';
import { DialogService } from '@services/dialog.service';
import { SignInModalComponent } from '@components/modals/sign-in-modal/sign-in-modal.component';
import { EqualsValidator } from '@utils/equals.validator';
import { PartnerSignInModalComponent } from '@components/modals/partner-sign-in-modal/partner-sign-in-modal.component';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss', '../global.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterModalComponent implements OnInit {

	constructor(
		private dialogRef: DialogRef<RegisterModalComponent>,
		private fb: FormBuilder,
		private API: APIService,
		private dialog: DialogService
	) {
		this.form = this.fb.group({
			email: new FormControl("", [
				Validators.required, Validators.email
			]),
			phone: new FormControl("", [
				Validators.required, Validators.pattern(/\+?\d+/)
			]),
			password: new FormControl("", [
				Validators.required, Validators.minLength(8)
			]),
			password2: new FormControl("", [
				Validators.required
			])
		}, {
			validator: EqualsValidator("password", "password2")
		})
	}

	form: FormGroup;
	isLoading$ = new BehaviorSubject<boolean>(false);

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

	matchingPasswords(c: AbstractControl) {
		console.log(this);
		return c.value === this.form.value.password.value ? null : {isMatching: false}
	}

}
