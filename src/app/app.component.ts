import { Component, OnInit } from '@angular/core';
//Animate on scroll
import * as AOS from 'aos'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Portfolio';

  constructor() { }

  ngOnInit(): void {
    AOS.init()
    window.addEventListener('load', AOS.refresh)
  }

}
