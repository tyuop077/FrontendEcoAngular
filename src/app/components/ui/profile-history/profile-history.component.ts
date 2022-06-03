import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-profile-history',
	templateUrl: './profile-history.component.html',
	styleUrls: ['./profile-history.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileHistoryComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

}
