import { TestBed } from '@angular/core/testing';

import { ValidationguardGuard } from './validationguard.guard';

describe('ValidationguardGuard', () => {
  let guard: ValidationguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidationguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
