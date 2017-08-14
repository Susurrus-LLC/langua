import { TestBed, inject } from '@angular/core/testing';

import { MorphDataService } from './morph-data.service';

describe('MorphDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MorphDataService]
    });
  });

  it('should be created', inject([MorphDataService], (service: MorphDataService) => {
    expect(service).toBeTruthy();
  }));
});
