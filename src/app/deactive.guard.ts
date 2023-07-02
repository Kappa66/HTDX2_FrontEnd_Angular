import { CanDeactivateFn } from '@angular/router';
import { ProductComponent } from './product/product.component';

export const deactiveGuard: CanDeactivateFn<ProductComponent> = (component:ProductComponent
  , currentRoute, currentState, nextState) => {
if(component.isAllowed){
  return confirm("you are not allowed ")
}
else{
  return true
}
    
  //return false;
};
