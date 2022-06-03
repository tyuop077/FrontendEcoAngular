import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LocalStorage } from '@utils/local-storage';
import { DialogService } from '@services/dialog.service';
import { SignInModalComponent } from '@components/modals/sign-in-modal/sign-in-modal.component';
import { UserSessionCache } from '@services/session.service';
import { MobileNavComponent } from '@components/modals/mobile-nav/mobile-nav.component';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

	constructor(private dialog: DialogService) {}

	@LocalStorage(true, "user_cache") cache$?: UserSessionCache;

	ngOnInit(): void {
	}

	locations$ = [
		{label: "Главная", path: "/"},
		{label: "Пункты сбора", path: "/points"},
		{label: "ЭкоМаркет", path: "/market"},
		{label: "О сервисе", path: "/about"}
	]

	openSignInModal() {
		this.dialog.openDialog(SignInModalComponent);
	}

	openMobileNav() {
		this.dialog.openDialog(MobileNavComponent, {
			maxWidth: "100vw",
			maxHeight: "100vh",
			width: "100%",
			height: "100%",
			panelClass: "borderless"
		});
	}

}
