import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  // Inyectar en el constructor el formBuilder
  constructor(){ }


  login() {
    console.log(this.email);
    console.log(this.password);
  }

  ngOnInit() {}
}
