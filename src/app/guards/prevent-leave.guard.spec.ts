import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { preventLeaveGuard } from './prevent-leave.guard';

describe('preventLeaveGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => preventLeaveGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
