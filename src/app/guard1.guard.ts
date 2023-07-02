import { CanActivate, CanActivateFn } from '@angular/router';

// export const guard1Guard: CanActivateFn = (route, state) => {
  
//   if(20 > 10){
//     return true;
//   }else{
//     return false;
//   }
  
// };

export class Auth1Guard implements CanActivate{
  canActivate(){
    return true;
  }
}
