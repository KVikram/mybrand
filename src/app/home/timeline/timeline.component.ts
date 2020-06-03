import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  workTimeline:any;
  
  constructor(private httpClient: HttpClient) { 
    this.httpClient.get("assets/data/work-timeline.json").subscribe(data =>{
      this.workTimeline = data;
      console.log(this.workTimeline);
    });
  }

  ngOnInit() {
    
  }

}
