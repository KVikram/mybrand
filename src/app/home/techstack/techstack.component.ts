import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
	selector: "app-techstack",
	templateUrl: "./techstack.component.html",
	styleUrls: ["./techstack.component.css"],
})
export class TechstackComponent implements OnInit {
	techSkills: [];

	constructor(private httpClient: HttpClient) {
		this.httpClient
			.get("assets/data/tech-stack.json")
			.subscribe((data: any) => {
				this.techSkills = data.skills;
			});
	}

	ngOnInit() {}
}
