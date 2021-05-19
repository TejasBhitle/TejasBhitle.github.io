import { Component, OnInit } from '@angular/core';
import { Blog } from './../models/blog';
import { FirebaseService } from './../firebase.service'
import { CacheService } from '../cache.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  blogs : Blog[] = []
  private subscription;
  public spinnerVisibility = false;

  constructor(
    private firebaseService: FirebaseService,
    private cache : CacheService) { }

  ngOnInit() {
    let blogs = this.cache.getItem('blogs');
    if(blogs){
      this.blogs = JSON.parse(blogs);
    }
    else{
      this.spinnerVisibility = true;
      this.subscription = this.firebaseService.fetchBlogs()
      .subscribe(blogs => {
         this.blogs = blogs.sort(function(a,b){
           if(a.index < b.index) return 1;
           if(a.index > b.index) return -1;
           return 0;
         })
         this.spinnerVisibility = false;
         this.cache.setItem('blogs',JSON.stringify(this.blogs))
      })
    }
  }

  ngOnDestroy(){
    if(this.subscription)
      this.subscription.unsubscribe();
  }

}
