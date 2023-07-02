import { CanActivateFn } from '@angular/router';

export const thirdgGuard: CanActivateFn = (route, state) => {
  return true;
};
