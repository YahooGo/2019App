import { TestBed } from '@angular/core/testing';

import { RequserService } from './requser.service';

describe('RequserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequserService = TestBed.get(RequserService);
    expect(service).toBeTruthy();
  });
});
