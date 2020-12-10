import { Component, OnInit, OnDestroy } from "@angular/core";
import { MatBottomSheet, MatBottomSheetRef } from "@angular/material/bottom-sheet";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ThemeService } from "src/app/services/theme.service";
import { Subscription } from "rxjs";
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
	selector: "app-about",
	templateUrl: "./about.component.html",
	styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit, OnDestroy {

	aboutInfo: any;
	eduInfo: any;
	projects: any;
	soBadgeURL: String;
	soThemeURL: String;
	profileInfo: {};
	themingSubscription: Subscription;


	constructor(
		private bottomSheet: MatBottomSheet,
		private readonly themeService: ThemeService,
		private dataService: ShareDataService
	) {
		// this.soBadgeURL = "https://stackoverflow.com/users/flair/4316707.png";
		// this.soThemeURL = "https://stackoverflow.com/users/flair/4316707.png?theme=clean";
	}

	openShareSheet(): void {
		this.bottomSheet.open(ShareMenuSheet);
	}

	ngOnInit() {
		//load about section by fetching profile details
		this.loadProfileInfo();
		//set SO badge theme
		//this.setSOBadgeTheme(); /* Stopping SO theme switch for while till we figure out best place for it*/
	}

	/**
	 * Load profile info by calling shared service getProfileInfo()
	 */
	private loadProfileInfo() {
		this.dataService.getProfileInfo().subscribe((data: any) => {
			this.profileInfo = data;
			this.aboutInfo = data.basics;
			this.eduInfo = data.education[0];
			this.projects = data.projects;
			//send the profile data to other components
			this.dataService.sendProfileInfo(this.profileInfo);
		});
	}

	/**
	 * Set SO badge theme based on user selected app theme
	 */
	private setSOBadgeTheme() {
		this.themingSubscription = this.themeService.OnThemeSwitch.subscribe((value) => {
			this.soThemeURL = value
				? this.soBadgeURL + "?theme=dark"
				: this.soBadgeURL + "?theme=clean";
		});
	}

	ngOnDestroy() {
		this.themingSubscription.unsubscribe();
	}
}

@Component({
	selector: "share-menu-sheet",
	templateUrl: "share-menu-sheet.html",
})
export class ShareMenuSheet {
	constructor(
		private bottomSheetRef: MatBottomSheetRef<ShareMenuSheet>,
		private snackBar: MatSnackBar
	) { }

	copyLink(link: string): void {
		this.bottomSheetRef.dismiss();
		//event.preventDefault();
		this.copyMessage(link);
		this.openCopyMsg("Link is copied");
	}

	/*Native JS code to copy some text to clipboard */
	//TODO : Replace this method with [cdkCopyToClipboard] after migrating to Angular v9 !
	copyMessage(val: string): void {
		const selBox = document.createElement("textarea");
		selBox.style.position = "fixed";
		selBox.style.left = "0";
		selBox.style.top = "0";
		selBox.style.opacity = "0";
		selBox.value = val;
		document.body.appendChild(selBox);
		selBox.focus();
		selBox.select();
		document.execCommand("copy");
		document.body.removeChild(selBox);
	}

	openCopyMsg(message: string) {
		this.snackBar.open(message, "", {
			duration: 1000,
			panelClass: ["mat-toolbar", "mat-accent"],
		});
	}
}
