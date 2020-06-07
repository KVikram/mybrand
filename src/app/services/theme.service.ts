import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class ThemeService {
	themes = ["mybrand-dark-theme", "mybrand-light-theme"];

	public OnThemeSwitch: Subject<boolean> = new Subject<boolean>();

	constructor() {}
}
