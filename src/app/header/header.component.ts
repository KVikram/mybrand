import { Component, OnInit } from "@angular/core";
import { SvgIconService } from "../services/svg-icon.service";
import { ThemeService } from "../services/theme.service";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
	toggleDarkMode: boolean;

	constructor(
		private svgIcons: SvgIconService,
		private readonly themeService: ThemeService
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
		this.themeService.OnThemeSwitch.next(isDarkMode);
	}

	ngOnInit() { }
}
