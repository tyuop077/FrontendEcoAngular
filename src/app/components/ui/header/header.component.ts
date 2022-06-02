import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LocalStorage } from '@utils/local-storage';
import { DialogService } from '@services/dialog.service';
import { SignInModalComponent } from '@components/modals/sign-in-modal/sign-in-modal.component';
import { SessionService, UserSessionCache } from '@services/session.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

	constructor(private dialog: DialogService, private session: SessionService) {}

	@LocalStorage(true, "user_cache") cache$?: UserSessionCache;
	isAuthorized$ = this.session.isAuthorized$;

	ngOnInit(): void {
		this.isAuthorized$.subscribe(v => console.log("header.component.ts", v))
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
