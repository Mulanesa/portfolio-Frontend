import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})


export class UsersService {

  constructor(private http: HttpClient, private cookies: CookieService) { }

  login(user: any): Observable<any> {
    return this.http.get("http://localhost:3000/user", user);
  }

  register(user:any): Observable<any> {
    return this.http.post("http://localhost:3000/user", user);
  }

  setToken(token: string) {
    this.cookies.set("token", token);
  }

  getToken() {
    return this.cookies.get("token");
  }
  getUser() {
    return this.http.get("http://localhost:3000/user");
  }
  getUserLogged() {
    const token = this.getToken();
  }
}
