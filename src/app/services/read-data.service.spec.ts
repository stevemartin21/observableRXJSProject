import { TestBed } from '@angular/core/testing';

import { ReadDataService } from './read-data.service';

describe('ReadDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReadDataService = TestBed.get(ReadDataService);
    expect(service).toBeTruthy();
  });
});
