import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
	selector: 'app-checkbox-selector',
	templateUrl: './checkbox-selector.component.html',
	styleUrls: ['./checkbox-selector.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxSelectorComponent implements OnInit {

	constructor() { }

	@Input("choices") choices$!: Record<string, string>;
	@Input("selected") selected$!: BehaviorSubject<string[]>;

	ngOnInit(): void {
	}

	onChange(current: string[], key: string, enabled: boolean) {
		if (enabled) {
			this.selected$.next([...current, key]);
		} else {
			const set = new Set(current);
			set.delete(key);
			this.selected$.next(Array.from(set));
		}
	}

}
