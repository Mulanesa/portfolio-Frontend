import { Component, OnInit } from '@angular/core';
import { AuthService } from './data/services/auth.service';
import * as AOS from 'aos'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Presentacion';
  authService = AuthService;

  constructor() { }

  ngOnInit(): void {
    AOS.init()
    window.addEventListener('load', AOS.refresh)
  }

}
