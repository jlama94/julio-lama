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


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getRepositoriesFromGitHub();
  }

  private getRepositoriesFromGitHub() {
    this.githubResponse = this.route.snapshot.data.githubData;
  }
}
