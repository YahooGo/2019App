import { TestBed } from '@angular/core/testing';

import { ScreenResizeService } from './screen-resize.service';

describe('ScreenResizeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScreenResizeService = TestBed.get(ScreenResizeService);
    expect(service).toBeTruthy();
  });
});
