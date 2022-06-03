import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProfileHistoryService } from '@services/profile-history.service';

@Component({
	selector: 'app-profile-history',
	templateUrl: './profile-history.component.html',
	styleUrls: ['./profile-history.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileHistoryComponent implements OnInit {

	constructor(private history: ProfileHistoryService) { }

	items$ = this.history.items$

	ngOnInit(): void {
	}

}
