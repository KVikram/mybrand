import { ThemeService } from './../services/theme.service';
import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Output, EventEmitter, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {

  @ViewChild('about', { read: ElementRef, static: true }) about: ElementRef;
  @ViewChild('skills', { read: ElementRef, static: true }) skills: ElementRef;
  @ViewChild('timeline', { read: ElementRef, static: true }) timeline: ElementRef;
  @ViewChild('articles', { read: ElementRef, static: true }) articles: ElementRef;

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