import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '@services/toast.service';
import { AuthService } from '@services/auth.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
	form: FormGroup;
	regForm: FormGroup;

	constructor(
		private fb: FormBuilder,
		private toast: ToastService,
		private authService: AuthService,
	) {
		this.form = this.fb.group({
			login: ['', [Validators.required]],
			password: ['', [Validators.required]]
		});

		this.regForm = this.fb.group({
			email: ['', [Validators.required]],
			phone_number: ['', [Validators.required]],
			password: ['', [Validators.required]],
			role: 'USER'
		});
	}


	login(): void {
		if (!this.form.valid) {
			this.toast.error('Заполните все поля!');
			return;
		}

		this.authService.authorize(this.form.value).subscribe(res => {
			this.toast.success('Добро пожаловать');
			this.authService.token = res.token;
		}, err => {
			console.log(err);
		})
	}

	registration(): void {
		if (!this.regForm.valid) {
			this.toast.error('Заполните все поля!');
			return;
		}

		this.authService.registration(this.regForm.value).subscribe(res => {
			this.toast.success('Регистрация прошла успешно');
		}, err => {
			console.log(err);
		});
	}

	getProfile(): void {
		this.authService.getProfile().subscribe(res => {
			console.log(res);
		});
	}
}
