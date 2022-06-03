import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from '@services/dialog.service';
import { SignInModalComponent } from '@components/modals/sign-in-modal/sign-in-modal.component';
import { storageService } from '@utils/local-storage';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {

	constructor(private router: Router, private dialog: DialogService) { }

	tab: number = 0;

	ngOnInit(): void {
		if (!storageService.getStorageValue("user_cache")) {
			// not authorized
			this.router.navigate([""]);
			this.dialog.openDialog(SignInModalComponent);
		}
	}

	setTab(index: number) {
		this.tab = index;
	}

}
