import { Component, OnInit } from '@angular/core';
import { SvgIconService } from '../services/svg-icon.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private svgIcons:SvgIconService) {
    this.svgIcons.init();
   }

  ngOnInit() {
  }

}
