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
		this.svgIcons.init();
	}

	toggleTheme(isDarkMode) {
		this.toggleDarkMode = isDarkMode;
		this.themeService.OnThemeSwitch.next(isDarkMode);
	}

	ngOnInit() {}
}
