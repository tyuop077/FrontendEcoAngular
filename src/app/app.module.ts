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
import { MarketComponent } from '@pages/market/market.component';
import { MarketItemsComponent } from '@components/ui/market-items/market-items.component';
import { CheckboxSelectorComponent } from '@components/ui/checkbox-selector/checkbox-selector.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { ExampleDialogComponent } from '@components/modals/example-dialog/example-dialog.component';
import { DialogModule } from '@angular/cdk-experimental/dialog';
import { ModalContainerComponent } from '@components/modals/modal-container/modal-container.component';
import { SignInModalComponent } from '@components/modals/sign-in-modal/sign-in-modal.component';
import { SessionService } from '@services/session.service';
import { LoaderComponent } from '@components/ui/loader/loader.component';
import { RegisterModalComponent } from '@components/modals/register-modal/register-modal.component';
import { MarketPromoComponent } from '@components/ui/market-promo/market-promo.component';
import { QRCodeModule } from 'angularx-qrcode';
import { MarketPurchaseModalComponent } from '@components/modals/market-purchase-modal/market-purchase-modal.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SliderComponent,
		HeaderComponent,
		FooterComponent,
		NotFoundComponent,
		RecyclingPointsComponent,
		MapComponent,
		MarketComponent,
		MarketItemsComponent,
		CheckboxSelectorComponent,
		ExampleDialogComponent,
		ModalContainerComponent,
		SignInModalComponent,
		LoaderComponent,
		RegisterModalComponent,
		MarketPromoComponent,
		MarketPurchaseModalComponent
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
		AngularSvgIconModule.forRoot(),
		DialogModule,
		OverlayModule,
		PortalModule,
		QRCodeModule
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
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: SessionService,
			multi: true
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
