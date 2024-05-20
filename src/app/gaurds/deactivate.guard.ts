import { CanActivateFn } from '@angular/router';

export const deactivateGuard: CanActivateFn = (route, state) => {
  return window.confirm("Are you sure you want exit the page ??");
};
