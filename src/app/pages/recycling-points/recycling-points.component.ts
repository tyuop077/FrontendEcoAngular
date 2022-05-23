import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-recycling-points',
  templateUrl: './recycling-points.component.html',
  styleUrls: ['./recycling-points.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecyclingPointsComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

}
