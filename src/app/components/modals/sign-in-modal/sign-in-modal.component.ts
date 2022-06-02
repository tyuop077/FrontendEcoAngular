import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DialogRef } from '@angular/cdk-experimental/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
	selector: 'app-sign-in-modal',
	templateUrl: './sign-in-modal.component.html',
	styleUrls: ['./sign-in-modal.component.scss', '../global.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInModalComponent implements OnInit {

	constructor(private dialogRef: DialogRef<SignInModalComponent>, private fb: FormBuilder) {
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

	ngOnInit(): void {
	}

	close(): void {
		this.dialogRef.close(true);
	}

	onSubmit(): void {
		alert(JSON.stringify(this.form.value))
	}

	get phoneError() {
		const phone = this.form.controls["phone"];
		if (!phone.invalid || !(phone.dirty || phone.touched)) return;
		if (phone.errors!["required"] || phone.errors?.["pattern"]) return "Введите номер телефона";
		return;
	}

	get passwordError() {
		const password = this.form.controls["password"];
		if (!password.invalid || !(password.dirty || password.touched)) return;
		if (password.errors!["required"]) return "Введите пароль";
		if (password.errors!["minlength"]) return "Пароль должен быть не меньше 8 символов";
		return;
	}

}
