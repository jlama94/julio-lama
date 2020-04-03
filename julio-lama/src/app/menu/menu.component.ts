import { Component, OnInit } from '@angular/core';
import {NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  hideRoute = true;


  constructor() { }

  ngOnInit() {
  }

}
