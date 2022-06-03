import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DialogRef } from '@angular/cdk-experimental/dialog';

@Component({
	selector: 'app-mobile-nav',
	templateUrl: './mobile-nav.component.html',
	styleUrls: ['./mobile-nav.component.scss', '../global.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileNavComponent implements OnInit {

	constructor(private dialogRef: DialogRef<MobileNavComponent>) { }

	ngOnInit(): void {
	}

	close(): void {
		this.dialogRef.close(true);
	}

}
