import { TestBed } from '@angular/core/testing';

import { AuthHttpClient } from './auth-http-client';

describe('AuthHttpClient', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthHttpClient = TestBed.get(AuthHttpClient);
    expect(service).toBeTruthy();
  });
});
