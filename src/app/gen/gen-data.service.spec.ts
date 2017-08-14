import { TestBed, inject } from '@angular/core/testing';

import { GenDataService } from './gen-data.service';

describe('GenDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenDataService]
    });
  });

  it('should be created', inject([GenDataService], (service: GenDataService) => {
    expect(service).toBeTruthy();
  }));
});
