import { CanActivateFn } from '@angular/router';

export const activateChildGuard: CanActivateFn = (route, state) => {
  alert('You are not allowed to view this page');
  return false;
};
