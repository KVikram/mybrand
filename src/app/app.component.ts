import { Component } from "@angular/core";
import { filter } from "rxjs/operators";
import { Router, NavigationEnd } from "@angular/router";

declare var gtag;

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
})
export class AppComponent {
	title = "mybrand";

	constructor(router: Router) {
		const navEndEvent$ = router.events.pipe(
			filter((e) => e instanceof NavigationEnd)
		);
		navEndEvent$.subscribe((e: NavigationEnd) => {
			console.log("gtag invoked");
			gtag("config", "UA-125406347-2", { page_path: e.urlAfterRedirects });
		});
	}
}
