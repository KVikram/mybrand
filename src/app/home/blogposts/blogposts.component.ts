import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blogposts',
  templateUrl: './blogposts.component.html',
  styleUrls: ['./blogposts.component.css']
})
export class BlogpostsComponent implements OnInit {

  wordPressBlogs: any;
  WP_COM_API_URl: String;

  constructor(private httpClient: HttpClient) {
    //WP public API URL
    this.WP_COM_API_URl = "https://public-api.wordpress.com/rest/v1.1/sites/115099934/posts/";
  }

  ngOnInit() {
    this.getWordPressBlogs();
  }

  /**
   * Fetch top 5 posts from WordPress for user ng-coder-$scope.
   * This API will bring details for below fields
   * ID,author,date,modified,title,URL,excerpt,like_count
   */
  getWordPressBlogs() {
    this.httpClient
      .get(this.WP_COM_API_URl + "?context=display&pretty=true&fields=ID,author,date,modified,title,URL,excerpt,like_count&number=5").subscribe((data: any) => {
        this.wordPressBlogs = data;
      });
  }

}
