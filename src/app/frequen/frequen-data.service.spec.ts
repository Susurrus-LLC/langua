import { TestBed, inject } from '@angular/core/testing';

import { FrequenDataService } from './frequen-data.service';

describe('FrequenDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FrequenDataService]
    });
  });

  it('should be created', inject([FrequenDataService], (service: FrequenDataService) => {
    expect(service).toBeTruthy();
  }));
});
