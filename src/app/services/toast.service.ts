import { Injectable } from '@angular/core';
import { ToastrConfig, ToastrService } from 'ngx-toastr';

@Injectable({
	providedIn: 'root'
})
export class ToastService {
	constructor(
		private toastrService: ToastrService
	) {
	}

	success(message: string, config?: ToastrConfig): void {
		this.toastrService.success(message, 'Успех!', config);
	}

	error(message: string, config?: ToastrConfig): void {
		this.toastrService.error(message, 'Ошибка!', config);
	}
}
