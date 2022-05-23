import { Component, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent implements AfterViewInit {
	private map!: L.Map;

	private initMap(): void {
		this.map = L.map('map', {
			center: [55.792052, 49.122253],
			zoom: 19
		});

		const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

		tiles.addTo(this.map);
	}

	constructor() { }

	ngAfterViewInit(): void {
		this.initMap();
	}

}
