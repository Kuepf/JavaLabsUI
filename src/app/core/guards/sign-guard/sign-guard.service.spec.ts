import { TestBed } from '@angular/core/testing';

import { SignGuardService } from './sign-guard.service';

describe('SignGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignGuardService = TestBed.get(SignGuardService);
    expect(service).toBeTruthy();
  });
});
