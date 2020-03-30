import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {ResumeComponent} from './resume/resume.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {ContactMeComponent} from './contact-me/contact-me.component';
import {ProjectsComponent} from './projects/projects.component';

const routes: Routes = [
  {
    path: '', component: MenuComponent
  },
  {
    path: 'resume', component: ResumeComponent
  },
  {
    path: 'about-me', component: AboutMeComponent
  },
  {
    path: 'contact-me', component: ContactMeComponent
  },
  {
    path: 'projects', component: ProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
