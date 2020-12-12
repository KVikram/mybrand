import { Component, OnInit } from "@angular/core";
import { SvgIconService } from "../services/svg-icon.service";
import { ThemeService } from "../services/theme.service";
import { OverlayDialogRef } from '../overlay/overlay.component';
import { OverlayService } from '../services/overlay.service';

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
	toggleDarkMode: boolean;

	constructor(
		private svgIcons: SvgIconService,
		private readonly themeService: ThemeService,
		private overlayDialog: OverlayService
	) {
		//initialize SVG icons in the matIconRegistry for use.
		this.svgIcons.init();
	}

	/**
	 * Toggle the theme from Light <--> Dark mode
	 *  and inform ThemeService about the switch.
	 */
	toggleTheme(isDarkMode) {
		this.toggleDarkMode = isDarkMode;
		this.showThemeOverlay();
		this.themeService.OnThemeSwitch.next(isDarkMode);
	}

	showThemeOverlay() {
		let img = this.toggleDarkMode ? THEME_IMAGES[1] : THEME_IMAGES[0];
		let overlayDialogConfig = {
			hasBackdrop: true,
			backdropClass: this.toggleDarkMode ? 'dark-backdrop' : 'white-backdrop',
			image: img
		}
		let dialogRef: OverlayDialogRef = this.overlayDialog.open(overlayDialogConfig);

		setTimeout(() => {
			dialogRef.close();
		}, 1000);
	}

	ngOnInit() {

	}

}

export const THEME_IMAGES = [
	{ name: 'Lights_ON', url: 'https://img.icons8.com/fluent/96/000000/light-on.png' },
	{ name: 'Lights_OFF', url: 'https://img.icons8.com/officel/80/000000/light-off.png' },
];