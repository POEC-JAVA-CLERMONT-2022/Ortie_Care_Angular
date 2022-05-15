import { TestBed } from '@angular/core/testing';

import { SolServiceService } from './sol.service';

describe('SolServiceService', () => {
  let service: SolServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
