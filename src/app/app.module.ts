import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppMaterialModule } from "./app.material.module";
import { HomeComponent } from "./home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { AboutComponent, ShareMenuSheet } from "./home/about/about.component";
import { TimelineComponent } from "./home/timeline/timeline.component";
import { STEPPER_GLOBAL_OPTIONS } from "@angular/cdk/stepper";
import { FlexLayoutModule } from "@angular/flex-layout";
import { TechstackComponent } from "./home/techstack/techstack.component";
import { OverlayContainer } from "@angular/cdk/overlay";
import { ThemeService } from "./services/theme.service";

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		HeaderComponent,
		FooterComponent,
		AboutComponent,
		ShareMenuSheet,
		TimelineComponent,
		TechstackComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		AppMaterialModule,
		HttpClientModule,
		ServiceWorkerModule.register("./ngsw-worker.js", {
			enabled: environment.production,
		}),
		FlexLayoutModule,
	],
	entryComponents: [ShareMenuSheet],
	providers: [
		{
			provide: STEPPER_GLOBAL_OPTIONS,
			useValue: { displayDefaultIndicatorType: false },
		},
		OverlayContainer,
		ThemeService,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
