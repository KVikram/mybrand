import { Component, OnInit, OnDestroy } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ShareDataService } from 'src/app/services/share-data.service';
import { Subscription } from 'rxjs';

@Component({
	selector: "app-techstack",
	templateUrl: "./techstack.component.html",
	styleUrls: ["./techstack.component.css"],
})
export class TechstackComponent implements OnInit, OnDestroy {
	techSkills: [];
	profileInfoSubscription: Subscription;

	constructor(private httpClient: HttpClient,
		private dataService: ShareDataService) {

	}

	ngOnInit() {
		// this.httpClient
		// 	.get("assets/data/tech-stack.json").subscribe((data: any) => {
		// 		this.techSkills = data.skills;
		// 	});

		//get techskills..
		this.getTechSkillsData();
	}
	/**
	 * Fetch techskills by subscribing to profileData subject from ShareDataService
	 */
	private getTechSkillsData() {
		this.profileInfoSubscription = this.dataService.profileData.subscribe((value: any) => {
			this.techSkills = value.skills;
			this.addTechIcons(this.techSkills);
		})
	}

	/**
	 * Add 'icon' property to display images
	 * @param techSkills 
	 */
	private addTechIcons(techSkills) {
		if (techSkills == null || techSkills.length == 0) {
			return;
		}
		let icons = this.dataService.techIcons;
		for (let skill of techSkills) {
			for (let i = 0; i < icons.length; i++) {
				let item = icons[i];
				if (item.name === skill.name) {
					skill.icon = item.icon;
					break;
				}
			}
		}
	}

	ngOnDestroy() {
		this.profileInfoSubscription.unsubscribe();
	}
}
