import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Random } from '@utils/random';

@Component({
	selector: 'app-profile-promocodes',
	templateUrl: './profile-promocodes.component.html',
	styleUrls: ['./profile-promocodes.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePromocodesComponent implements OnInit {

	constructor() { }

	readonly code = Random.string(60);

	ngOnInit(): void {
	}

}
