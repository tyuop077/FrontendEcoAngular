import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CollectionPointsService } from '@services/collection-points.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-recycling-points',
  templateUrl: './recycling-points.component.html',
  styleUrls: ['./recycling-points.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecyclingPointsComponent implements OnInit {

	constructor(private collectionPointsService: CollectionPointsService) { }

	points$ = this.collectionPointsService.points$;
	selected: number | null = null;

	selectedShops$ = new BehaviorSubject<string[]>([]);
	selectedMaterials$ = new BehaviorSubject<string[]>([]);

	ngOnInit(): void {
	}

	openPointDescription(index: number) {
		this.selected = index
	}

	closePointDescription() {
		this.selected = null
	}

}
