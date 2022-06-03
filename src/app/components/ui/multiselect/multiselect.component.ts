import { Component, OnInit, ChangeDetectionStrategy, ElementRef, ViewChild, Input } from '@angular/core';
import { ConnectedPosition } from '@angular/cdk/overlay';
import { BehaviorSubject } from 'rxjs';

@Component({
	selector: 'app-multiselect',
	templateUrl: './multiselect.component.html',
	styleUrls: ['./multiselect.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiselectComponent implements OnInit {

	constructor() {
	}

	@Input("choices") choices$!: Record<string, string>;
	@Input("value") placeholder!: string;
	@Input("selected") selected$!: BehaviorSubject<string[]>;

	value$ = "";

	ngOnInit(): void {
		this.selected$.subscribe(v => {
			this.value$ = this.placeholder.replace("%", `${v.length}`)
		})
	}

	isOpen: boolean = false;
	innerValue!: string;

	@ViewChild('origin') origin!: ElementRef;
	originRect!: ClientRect;

	overlayPositions: ConnectedPosition[] = [{
		originX: 'start',
		originY: 'bottom',
		overlayX: 'start',
		overlayY: 'top',
	}]

	toggleSelect(): void {
		this.originRect = this.origin.nativeElement?.getBoundingClientRect();
		this.isOpen = !this.isOpen;
	}

	select(value: any): void {
		this.innerValue = value;
		this.toggleSelect();
	}

}
