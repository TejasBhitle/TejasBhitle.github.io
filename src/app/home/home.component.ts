import { Component, OnInit, OnDestroy } from '@angular/core';
import { CacheService } from '../cache.service';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy  {

  private subscription;
  private subscription2;
  private subscription3;
  public profilePicUrl;
  public resumeUrl: string = ""
  public introText: string = ""
  public spinnerVisibility = false;

  constructor(
    private firebaseService : FirebaseService, 
    private cache : CacheService) { }

  ngOnInit() {
    let url = this.cache.getItem('profile_pic_url');
    if(!url){
    this.spinnerVisibility = true;
    this.subscription = this.firebaseService.fetchProfilePic()
      .subscribe((url) => {
        this.profilePicUrl = url;
        this.subscription.unsubscribe();
        this.cache.setItem('profile_pic_url',url);
        this.spinnerVisibility = false;
      });
    }
    else{
      this.profilePicUrl = url;
      this.spinnerVisibility = false;
    }

    let intro_text = this.cache.getItem('intro_text')
    if(!intro_text){
      this.subscription2 = this.firebaseService.fetchIntroText().subscribe(
        (text) => {
          this.introText = text
          this.subscription2.unsubscribe();
          this.cache.setItem('intro_text', text);
        }
      )
    }
    else{
      this.introText = intro_text;
    }
    

    this.subscription3 = this.firebaseService.fetchResumeUrl().subscribe(
      (url) => {
        this.resumeUrl = url
        this.subscription3.unsubscribe()
      }
    )
  }

  ngOnDestroy(){
    if(this.subscription)
      this.subscription.unsubscribe();

    if(this.subscription2)
      this.subscription2.unsubscribe();

    if(this.subscription3)
      this.subscription3.unsubscribe();
  }

}
