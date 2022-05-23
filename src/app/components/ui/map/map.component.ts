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

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

		const icon = L.icon({
			iconUrl: "assets/marker.svg"
		})

		L.marker([55.791306, 49.121525], {icon}).bindPopup(
			`<b>ул.Кремлёвская, 88</b>
                    <p>Пластик, стекло, бумага, металл, старая одежда, батареи, аккумуляторы...</p>`
		).addTo(this.map);
		L.marker([55.792129, 49.122045], {icon}).bindPopup(
			`<b>ул.Кремлёвская, 35</b>
                    <p>Стекло, бумага, металл, старая одежда, батареи</p>`
		).addTo(this.map);
	}

	constructor() { }

	ngAfterViewInit(): void {
		this.initMap();
	}

}
