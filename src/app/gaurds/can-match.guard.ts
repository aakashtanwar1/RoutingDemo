import { CanActivateFn } from '@angular/router';
import { LoginService } from '../service/login.service';
import { inject } from '@angular/core';

export const canMatchGuard: CanActivateFn = (route, state) => {
  const loginService:LoginService = inject(LoginService)
  const userType = loginService.userType;
  if (userType == "admin") {
    return true;
  }
  return false;
};
