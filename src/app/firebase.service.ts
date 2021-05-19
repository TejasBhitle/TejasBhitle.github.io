import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFireDatabase) {}

  fetchProjects(): Observable<any[]>{
    return this.db.list('/projects').valueChanges()
  }

  fetchResumeUrl(): Observable<any>{
    return this.db.object('/home-page/resume-url/').valueChanges()
  }

  fetchProfilePic():Observable<any>{
    return this.db.object('/home-page/profile-pic/').valueChanges()
  }

  fetchIntroText():Observable<any>{
    return this.db.object('/home-page/intro_text/').valueChanges()
  }

  fetchBlogs(): Observable<any[]>{
    return this.db.list('/blogs').valueChanges()
  }

  fetchBlog(slug:string):Observable<any>{
    return this.db.object('/blogs/'+slug).valueChanges()
  }

  fetchWorks(): Observable<any[]>{
      return this.db.list('/works').valueChanges()
  }

}
