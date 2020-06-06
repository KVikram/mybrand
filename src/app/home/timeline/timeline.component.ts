import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
	selector: "app-timeline",
	templateUrl: "./timeline.component.html",
	styleUrls: ["./timeline.component.css"],
})
export class TimelineComponent implements OnInit {
	workTimeline: { work: [] };

	constructor(private httpClient: HttpClient) {
		this.httpClient
			.get("assets/data/work-timeline.json")
			.subscribe((data: any) => {
				this.workTimeline = data;
			});
	}

	ngOnInit() {}
}
