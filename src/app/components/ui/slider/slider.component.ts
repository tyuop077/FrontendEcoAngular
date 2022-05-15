import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

@Component({
	selector: 'app-slider',
	templateUrl: './slider.component.html',
	styleUrls: ['./slider.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
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

	onSwiper([swiper]: any) {
		console.log(swiper);
	}
	onSlideChange() {
		this.color$ = this.swiper!.swiperRef.activeIndex === 1 ? "yellow" : "green";
	}

	color$: "green" | "yellow" = "green";

	@ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
	slideNext(){
		this.swiper!.swiperRef.slideNext(100);
	}
	slidePrev(){
		this.swiper!.swiperRef.slidePrev(100);
	}

}
