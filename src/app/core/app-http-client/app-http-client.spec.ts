import { TestBed } from '@angular/core/testing';

import { AppHttpClient } from './app-http-client';

describe('AppHttpClient', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppHttpClient = TestBed.get(AppHttpClient);
    expect(service).toBeTruthy();
  });
});
