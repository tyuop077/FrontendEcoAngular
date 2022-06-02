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
				Validators.required, Validators.min(8)
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

}
