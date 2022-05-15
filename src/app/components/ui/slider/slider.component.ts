import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ViewEncapsulation } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { BehaviorSubject } from 'rxjs';

@Component({
	selector: 'app-slider',
	templateUrl: './slider.component.html',
	styleUrls: ['./slider.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class SliderComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	config: SwiperOptions = {
		spaceBetween: 50,
		navigation: true,
		pagination: { clickable: true },
		scrollbar: { draggable: true }
	};

	@ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

	color$ = new BehaviorSubject<"green" | "yellow">("green");

	onSlideChange() {
		this.color$.next(this.swiper!.swiperRef.activeIndex === 1 ? "yellow" : "green");
	}

	slideNext(){
		this.swiper?.swiperRef.slideNext();
	}
	slidePrev(){
		this.swiper?.swiperRef.slidePrev();
	}

}
