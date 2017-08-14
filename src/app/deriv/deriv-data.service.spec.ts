import { TestBed, inject } from '@angular/core/testing';

import { DerivDataService } from './deriv-data.service';

describe('DerivDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DerivDataService]
    });
  });

  it('should be created', inject([DerivDataService], (service: DerivDataService) => {
    expect(service).toBeTruthy();
  }));
});
