import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {ResumeComponent} from './resume/resume.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {ContactMeComponent} from './contact-me/contact-me.component';
import {ProjectsComponent} from './projects/projects.component';
import {GitHubResolverService} from './resolver/git-hub-resolver.service';
import {GitHubService} from './service/git-hub.service';

const routes: Routes = [
  {
    path: 'menu', component: MenuComponent, children: [
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
        path: 'projects', component: ProjectsComponent,
        resolve: {
          githubData: GitHubResolverService
        }
      }
    ]
  },
  {
    path: '', redirectTo: '/menu', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [GitHubService, GitHubResolverService],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
