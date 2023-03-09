import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/data/services/users/users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';


  constructor(public userService: UsersService, public router: Router){ }


  login() {
    const user = {email: this.email, password: this.password};
    this.userService.login(user).subscribe( data => {
      this.userService.setToken(data.token);
      this.router.navigateByUrl('/');
    });
  }

  ngOnInit() {}
}
