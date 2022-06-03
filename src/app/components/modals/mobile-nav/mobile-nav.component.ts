import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk-experimental/dialog';
import { LocalStorage } from '@utils/local-storage';
import { UserSessionCache } from '@services/session.service';

class DialogData {
	nav!: {
		label: string,
		path: string
	}[]
}

@Component({
	selector: 'app-mobile-nav',
	templateUrl: './mobile-nav.component.html',
	styleUrls: ['./mobile-nav.component.scss', '../global.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileNavComponent implements OnInit {

	constructor(
		private dialogRef: DialogRef<MobileNavComponent>,
		@Inject(DIALOG_DATA) public data: DialogData
	) { }

	@LocalStorage(true, "user_cache") cache$?: UserSessionCache;

	ngOnInit(): void {
	}

	close(): void {
		this.dialogRef.close(true);
	}

}
