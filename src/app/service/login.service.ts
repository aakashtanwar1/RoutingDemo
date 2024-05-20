import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // isLoggedIn: boolean = true;
  isLoggedIn: boolean = false;
  // userType:string = "admin";
  userType:string = "user";
  isAuthenticated() {
    return this.isLoggedIn;
  }
}
