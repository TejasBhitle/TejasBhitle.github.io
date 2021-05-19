import {ActivatedRoute} from "@angular/router";
import { Component, OnInit } from '@angular/core';
import { Blog} from './../models/blog';
import { FirebaseService } from './../firebase.service'

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {

  slug: string
  blog: Blog
  public spinnerVisibility = false;
  private subscription;

  constructor(
    private route: ActivatedRoute,
    private firebaseService: FirebaseService
  ) {
    this.route.params.subscribe(
      params => {
        this.slug = params.slug
      }
    )
  }

  ngOnInit() {
    this.subscription = this.firebaseService.fetchBlog(this.slug).subscribe(
      (data) => {
        console.log(data);
        this.blog = data
        this.spinnerVisibility = true;
        this.subscription.unsubscribe()
      }
    )
  }

}
