import { Component, OnInit } from '@angular/core';
import { Work } from './../models/work';
import { FirebaseService } from './../firebase.service'
import { CacheService } from '../cache.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  works: Work[] = []
  private subscription;
  public spinnerVisibility = false;

  constructor(
    private firebaseService: FirebaseService,
    private cache : CacheService) { }

  ngOnInit() {
    let works = this.cache.getItem('works')
    if(works){
      this.works = JSON.parse(works)
    }
    else{
      this.spinnerVisibility = true;
      this.subscription = this.firebaseService.fetchWorks()
      .subscribe(works => {
         this.works = works.sort(function(a,b){
            if(a.index < b.index) return 1;
            if(a.index > b.index) return -1;
            return 0;
         })
         this.spinnerVisibility = false;
         this.cache.setItem('works',JSON.stringify(this.works))
      })
    }
  }

  ngOnDestroy(){
    if(this.subscription)
      this.subscription.unsubscribe();
  }

}
