import { CanActivateFn } from '@angular/router';

export const hasSessionGuard: CanActivateFn = (route, state) => {
  return true;
};
