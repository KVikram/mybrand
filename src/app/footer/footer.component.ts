import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currentYear:Number;

  constructor(){
    let d = new Date();
    this.currentYear= d.getUTCFullYear();
  }

  ngOnInit() {
  }

}
