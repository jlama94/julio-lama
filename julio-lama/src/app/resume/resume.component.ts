import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  // resumeDocumentPath = '/assets/documents/Resume.pdf';
  resumeDocumentPath = '/julio-lama/assets/documents/Resume.pdf';
  constructor() { }

  ngOnInit() {
  }

}
