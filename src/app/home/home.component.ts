import { ThemeService } from './../services/theme.service';
import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Output, EventEmitter, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {

  @ViewChild('about', { read: ElementRef }) about: ElementRef;
  @ViewChild('skills', { read: ElementRef }) skills: ElementRef;
  @ViewChild('timeline', { read: ElementRef }) timeline: ElementRef;
  @ViewChild('articles', { read: ElementRef }) articles: ElementRef;

  isDark: boolean;
  themingSubscription: Subscription;

  scrollToSection(section: String) {

    let elmRef: any;
    switch (section) {
      case 'about':
        elmRef = this.about;
        break;
      case 'skills':
        elmRef = this.skills;
        break;
      case 'timeline':
        elmRef = this.timeline;
        break;
      case 'articles':
        elmRef = this.articles;
        break;
      default:
        console.log("Unknown section");
    }
    elmRef.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }


  constructor(private themeService: ThemeService) {
  }


  ngOnInit() {
    this.checkDarkThemeOn();
  }

  checkDarkThemeOn() {
    this.themingSubscription = this.themeService.OnThemeSwitch.subscribe((value) => {
      this.isDark = value;
    });
  }

  ngOnDestroy(): void {
    this.themingSubscription.unsubscribe();
  }
}