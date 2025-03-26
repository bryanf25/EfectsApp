import { CanDeactivateFn } from '@angular/router';
import { UserComponent } from '../users/user/user.component';

export const preventLeaveGuard: CanDeactivateFn<UserComponent> = (component:UserComponent, currentRoute, currentState, nextState) => {
  if(component.hasEmailChanged()){
    return confirm('You have pedding changes, Are you sure to leave the page?')
  }
  else{
    return true
  }
};
