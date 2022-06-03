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
import { DialogModule } from '@angular/cdk-experimental/dialog';
import { ModalContainerComponent } from '@components/modals/modal-container/modal-container.component';
import { SignInModalComponent } from '@components/modals/sign-in-modal/sign-in-modal.component';
import { SessionService } from '@services/session.service';
import { LoaderComponent } from '@components/ui/loader/loader.component';
import { RegisterModalComponent } from '@components/modals/register-modal/register-modal.component';
import { MarketPromoComponent } from '@components/ui/market-promo/market-promo.component';
import { QRCodeModule } from 'angularx-qrcode';
import { MarketPurchaseModalComponent } from '@components/modals/market-purchase-modal/market-purchase-modal.component';
import { MultiselectComponent } from '@components/ui/multiselect/multiselect.component';
import { ProfileComponent } from '@pages/profile/profile.component';
import { ProfileCardComponent } from '@components/ui/profile-card/profile-card.component';
import { ProfilePromocodesComponent } from '@components/ui/profile-promocodes/profile-promocodes.component';
import { ProfileHistoryComponent } from '@components/ui/profile-history/profile-history.component';
import { SignInSmsModalComponent } from '@components/modals/sign-in-sms-modal/sign-in-sms-modal.component';
import { SignInSmsConfirmationModalComponent } from '@components/modals/sign-in-sms-confirmation-modal/sign-in-sms-confirmation-modal.component';
import { PartnerSignInModalComponent } from '@components/modals/partner-sign-in-modal/partner-sign-in-modal.component';
import { ProfilePromocodesQrComponent } from '@components/modals/profile-promocodes-qr/profile-promocodes-qr.component';

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
		ModalContainerComponent,
		SignInModalComponent,
		LoaderComponent,
		RegisterModalComponent,
		MarketPromoComponent,
		MarketPurchaseModalComponent,
		MultiselectComponent,
		ProfileComponent,
		ProfileCardComponent,
		ProfilePromocodesComponent,
		ProfileHistoryComponent,
		SignInSmsModalComponent,
		SignInSmsConfirmationModalComponent,
		PartnerSignInModalComponent,
		ProfilePromocodesQrComponent
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
