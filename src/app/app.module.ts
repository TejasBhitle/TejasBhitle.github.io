import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { AngularFireModule } from '@angular/fire'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ProjectsComponent } from './projects/projects.component';
import { WorkComponent } from './work/work.component'

import { environment } from './../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BlogDetailComponent,
    BlogsComponent,
    ProjectsComponent,
    WorkComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'work', component: WorkComponent},
      {path:'projects',component:ProjectsComponent},
      {path:'blogs/:slug', component: BlogDetailComponent},
      {path:'blogs', component:BlogsComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
