import { TestBed } from '@angular/core/testing';

import { SchoolapiService } from './schoolapi.service';

describe('SchoolapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SchoolapiService = TestBed.get(SchoolapiService);
    expect(service).toBeTruthy();
  });
});
