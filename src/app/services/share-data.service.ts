import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
/**
 *  Shared service to repurpose data across componenets
 */
export class ShareDataService {

  private profile = new BehaviorSubject({});
  profileData = this.profile.asObservable();

  gitConnectedURL: string;

  constructor(private http: HttpClient) {
    this.gitConnectedURL = 'https://gitconnected.com/v1/portfolio/kvikram';
  }

  /**
   * Get profile from https://gitconnected.com/kvikram
   */
  getProfileInfo() {
    return this.http.get(this.gitConnectedURL).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  /**
   * Broadcast the profile data to other components
   * @param profileData 
   */
  sendProfileInfo(profileData) {
    this.profile.next(profileData);
  }

  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  //Icons urls for tech skills - JSON
  techIcons = [{
    "name": "Angular Js",
    "icon": "assets/icons/tech-icons/icons8-angularjs-100.png"
  },
  {
    "name": "Angular",
    "icon": "assets/icons/tech-icons/angular.png"
  },
  {
    "name": "Java/J2EE",
    "icon": "assets/icons/tech-icons/icons8-java-100.png"
  },
  {
    "name": "Javascript",
    "icon": "assets/icons/tech-icons/icons8-javascript-100.png"
  },
  {
    "name": "Hibernate",
    "icon": "assets/icons/tech-icons/hibernate.png"
  },
  {
    "name": "Eclipselink",
    "icon": "assets/icons/tech-icons/Eclipselink.png"
  },
  {
    "name": "HTML 5",
    "icon": "assets/icons/tech-icons/icons8-html-5-100.png"
  },
  {
    "name": "CSS 3",
    "icon": "assets/icons/tech-icons/icons8-css3-100.png"
  },
  {
    "name": "SQL",
    "icon": "assets/icons/tech-icons/icons8-sql-100.png"
  },
  {
    "name": "Spring MVC",
    "icon": "assets/icons/tech-icons/icons8-spring-logo-100.png"
  },
  {
    "name": "Spring Boot",
    "icon": "assets/icons/tech-icons/spring-boot-logo.png"
  },
  {
    "name": "Micro services",
    "icon": "assets/icons/tech-icons/spring-microservices.png"
  },
  {
    "name": "Git",
    "icon": "assets/icons/tech-icons/icons8-git-100.png"
  },
  {
    "name": "DevOps",
    "icon": "assets/icons/tech-icons/icons8-wrench-100.png"
  },
  {
    "name": "Design Patterns",
    "icon": "assets/icons/tech-icons/icons8-design-100.png"
  },
  {
    "name": "PWA",
    "icon": "assets/icons/tech-icons/pwa.png"
  },
  {
    "name": "GCP",
    "icon": "assets/icons/tech-icons/icons8-google-cloud-platform-100.png"
  },
  {
    "name": "RDBMS",
    "icon": "assets/icons/tech-icons/icons8-oracle-logo-100.png"
  },
  {
    "name": "My SQL",
    "icon": "assets/icons/tech-icons/icons8-mysql-100.png"
  },
  {
    "name": "Nodejs",
    "icon": "assets/icons/tech-icons/icons8-nodejs-100.png"
  },
  {
    "name": "Bootstrap",
    "icon": "assets/icons/tech-icons/icons8-bootstrap-100.png"
  },
  {
    "name": "JPA",
    "icon": "assets/icons/tech-icons/hibernate.png"
  },
  {
    "name": "Typescript",
    "icon": "assets/icons/tech-icons/icons8-typescript-100.png"
  },
  {
    "name": "XML/JSON",
    "icon": "assets/icons/tech-icons/icons8-xml-file-100.png"
  },
  {
    "name": "RESTful APIs",
    "icon": "assets/icons/tech-icons/icons8-rest-api-100.png"
  },
  {
    "name": "Angular Material",
    "icon": "assets/icons/tech-icons/material.png"
  }
  ];

}
