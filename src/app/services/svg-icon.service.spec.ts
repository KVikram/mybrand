import { TestBed } from '@angular/core/testing';

import { SvgIconService } from './svg-icon.service';

describe('SvgIconService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SvgIconService = TestBed.get(SvgIconService);
    expect(service).toBeTruthy();
  });
});
