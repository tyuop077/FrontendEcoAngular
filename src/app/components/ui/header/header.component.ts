import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { storageService } from '@utils/local-storage';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

	constructor() {}

	cache$ = storageService.getStorageValue("user_cache");

	ngOnInit(): void {
	}

	locations$ = [
		{label: "Главная", path: "/"},
		{label: "Пункты сбора", path: "/points"},
		{label: "ЭкоМаркет", path: "/market"},
		{label: "О сервисе", path: "/about"}
	]

}
