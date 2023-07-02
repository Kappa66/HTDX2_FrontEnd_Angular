import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { thirdgGuard } from './thirdg.guard';

describe('thirdgGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => thirdgGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
