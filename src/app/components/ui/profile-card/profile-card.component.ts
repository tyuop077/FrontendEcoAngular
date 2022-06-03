import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LocalStorage } from '@utils/local-storage';
import { UserSessionCache } from '@services/session.service';

@Component({
	selector: 'app-profile-card',
	templateUrl: './profile-card.component.html',
	styleUrls: ['./profile-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileCardComponent implements OnInit {

	constructor() { }

	@LocalStorage(true, "user_cache") cache$?: UserSessionCache;

	ngOnInit(): void {
	}

}
