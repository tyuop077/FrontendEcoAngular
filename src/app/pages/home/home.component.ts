import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
	title = 'frontend-eco-angular';
}
