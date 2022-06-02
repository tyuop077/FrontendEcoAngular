import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { storageService } from '@utils/local-storage';
import { DialogService } from '@services/dialog.service';
import { SignInModalComponent } from '@components/modals/sign-in-modal/sign-in-modal.component';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

	constructor(private dialog: DialogService) {}

	cache$ = storageService.getStorageValue("user_cache");

	ngOnInit(): void {
	}

	locations$ = [
		{label: "Главная", path: "/"},
		{label: "Пункты сбора", path: "/points"},
		{label: "ЭкоМаркет", path: "/market"},
		{label: "О сервисе", path: "/about"}
	]

	openExampleDialog() {
		this.dialog.openDialog(SignInModalComponent);
	}

}
