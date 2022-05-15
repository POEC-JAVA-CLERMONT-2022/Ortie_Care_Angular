import { TestBed } from '@angular/core/testing';

import { LegumeServiceService } from './legume-service.service';

describe('LegumeServiceService', () => {
  let service: LegumeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegumeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
