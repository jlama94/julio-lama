import { Component, OnInit } from '@angular/core';
import { Repository } from '../model/repository';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})


export class ProjectsComponent implements OnInit {

  githubResponse: Repository[];

  myProjects = [
    {
      name: 'julio-lama.com',
      description: 'Develop Single Page Applications (SPAs) using the Angular Framework',
      url: '`<a href="https://www.julio-lama.com">julio-lama.com</a>`',
      technologies: ['Angular', ' Angular Material']
    },
    {
      name: 'League of Legends Stats Tracker',
      description: 'Chart representation of statistics for the game League of Legends',
      url: '',
      technologies: ['Spring Boot',' Angular', ' Highcharts', ' OpenFeign HTTP Client', ' AWS Elastic Beanstalk', ' Junit']
    },

    {
      name: 'Chicago Planner',
      description: 'An iOS application with popular places to visit while in Chicago',
      url: 'https://github.com/jlama94/MyChicagoPlanner',
      technologies: ['Swift',' Xcode']
    },
    {
      name: 'The Guardian News Application',
      description: 'A Web application that uses The Guardian API.',
      url:'https://github.com/jlama94/news-application',
      technologies: ['Spring Boot',' Angular', ' Heroku']
    }
  ];


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getRepositoriesFromGitHub();
  }

  private getRepositoriesFromGitHub() {
    this.githubResponse = this.route.snapshot.data.githubData;
  }
}
