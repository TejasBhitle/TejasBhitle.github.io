import { Component, OnInit } from '@angular/core';
import { Project } from './../models/project';
import { FirebaseService } from './../firebase.service'


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects:Project[] = [];
  private subscription;
  public spinnerVisibility = false;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    let projects = localStorage.getItem('projects');
    if(projects){
      this.projects = JSON.parse(projects);
    }
    else{
      this.spinnerVisibility = true;
      this.subscription = this.firebaseService.fetchProjects()
      .subscribe(projects => {
         this.projects = projects.sort(function(a,b){
            if(a.index < b.index) return 1;
            if(a.index > b.index) return -1;
            return 0;
         })
         this.spinnerVisibility = false;
         localStorage.setItem('projects',JSON.stringify(this.projects))
      })
    }
  }

  ngOnDestroy(){
    if(this.subscription)
      this.subscription.unsubscribe();
  }
}
