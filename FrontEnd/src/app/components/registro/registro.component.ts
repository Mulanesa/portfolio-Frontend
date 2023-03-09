import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/data/services/users/users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})


export class RegistroComponent implements OnInit {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';


  constructor(public userService: UsersService, public router: Router) { }

  register() {
    const user = { email: this.email, password: this.password };
    this.userService.register(user).subscribe(data => {
      this.userService.setToken(data.token);
      this.router.navigateByUrl('/portfolio');
    },
    error => {
      console.log(error);
    });
  }

  ngOnInit(): void { }

}
