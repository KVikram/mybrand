import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ShareDataService } from 'src/app/services/share-data.service';
import { Subscription } from 'rxjs';

@Component({
	selector: "app-timeline",
	templateUrl: "./timeline.component.html",
	styleUrls: ["./timeline.component.css"],
})
export class TimelineComponent implements OnInit {
	workTimeline: any;
	profileInfoSubscription: Subscription;

	constructor(private httpClient: HttpClient,
		private dataService: ShareDataService) {

	}

	ngOnInit() {
		// this.httpClient
		// 	.get("assets/data/work-timeline.json").subscribe((data: any) => {
		// 		this.workTimeline = data;
		// 	});

		//get work timeline details
		this.getWorkTimelineData();
	}

	/**
	 * Fetch work details from profile info
	 */
	private getWorkTimelineData() {
		this.profileInfoSubscription = this.dataService.profileData.subscribe((value: any) => {
			this.workTimeline = value.work;
		})
	}

	ngOnDestroy() {
		this.profileInfoSubscription.unsubscribe();
	}
}
