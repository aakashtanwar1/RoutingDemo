import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { LoginService } from '../service/login.service';

export const canActivateGuard: CanActivateFn = (route, state) => {
  const loginService:LoginService = inject(LoginService)
  const isAuthenticated = loginService.isAuthenticated();
  if (!isAuthenticated) {
    alert('You are not allowed to view this page');
    return false;
  }
  return true;
};
