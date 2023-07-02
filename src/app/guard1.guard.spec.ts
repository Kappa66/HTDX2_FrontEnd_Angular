import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { guard1Guard } from './guard1.guard';

describe('guard1Guard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guard1Guard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

/* route guards
      To prevent the users to access some parts of the application
      are used to secure the route paths
      it is carried on the basis of returning true or false in route guard
      we can generate any number of route guard in our application
      Command is -----. ng g guard nameofGuard 
      
      CanActivate---> Checks to see if the user can visit a route
      CanActivateChild ---> Checks to see if user can visit a children routes
      canload ---> Checks to see if user can load the modules which are lazy loaded 
      CanDeactivate ----> Checks to see if a user can exit or not fr a given exisiting present route*/
