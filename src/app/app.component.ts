import { Component, OnInit, OnDestroy } from "@angular/core";
import { filter } from "rxjs/operators";
import { Router, NavigationEnd } from "@angular/router";
import { ThemeService } from "./services/theme.service";
import { Subscription } from "rxjs";
import { OverlayContainer } from "@angular/cdk/overlay";

declare var gtag;

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
	themingSubscription: Subscription;
	isDarkModeOn: boolean;

	constructor(
		router: Router,
		private readonly themeService: ThemeService,
		private overlayContainer: OverlayContainer
	) {
		const navEndEvent$ = router.events.pipe(
			filter((e) => e instanceof NavigationEnd)
		);
		navEndEvent$.subscribe((e: NavigationEnd) => {
			gtag("config", "UA-125406347-2", { page_path: e.urlAfterRedirects });
		});
	}

	ngOnInit() {
		this.themingSubscription = this.themeService.OnThemeSwitch.subscribe(
			(value) => {
				this.isDarkModeOn = value;
				this.applyThemeOnOverlays();
			}
		);
	}
	/**
	 * Apply the current theme on components with overlay (e.g. Dropdowns, Dialogs)
	 */
	private applyThemeOnOverlays() {
		// remove old theme class and add new theme class
		// we're removing any css class that contains '-theme' string
		const overlayContainerClasses = this.overlayContainer.getContainerElement()
			.classList;
		const themeClassesToRemove = Array.from(this.themeService.themes);
		if (themeClassesToRemove.length) {
			overlayContainerClasses.remove(...themeClassesToRemove);
		}
		overlayContainerClasses.add(
			this.isDarkModeOn ? "mybrand-dark-theme" : "mybrand-light-theme"
		);
	}

	ngOnDestroy() {
		this.themingSubscription.unsubscribe();
	}
}
