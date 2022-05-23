import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '@pages/home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from '@services/auth-interceptor.service';
import { ErrorInterceptorService } from '@services/error-interceptor.service';
import { UrlInterceptorService } from '@services/url-interceptor.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastContainerModule, ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderComponent } from "@components/ui/slider/slider.component";
import { HeaderComponent } from '@components/ui/header/header.component';
import { FooterComponent } from '@components/ui/footer/footer.component';
import { SwiperModule } from 'swiper/angular';
import { NotFoundComponent } from '@pages/not-found/not-found.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { RecyclingPointsComponent } from '@pages/recycling-points/recycling-points.component';
import { MapComponent } from '@components/ui/map/map.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SliderComponent,
		HeaderComponent,
		FooterComponent,
		NotFoundComponent,
		RecyclingPointsComponent,
  MapComponent
    ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		CommonModule,
		ToastrModule.forRoot({
			timeOut: 2500,
			progressBar: true,
			positionClass: 'toast-bottom-center'
		}),
		BrowserAnimationsModule,
		ToastContainerModule,
		SwiperModule,
		AngularSvgIconModule.forRoot()
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: UrlInterceptorService,
			multi: true,
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptorService,
			multi: true,
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ErrorInterceptorService,
			multi: true
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
