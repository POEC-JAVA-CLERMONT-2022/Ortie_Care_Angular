import { TestBed } from '@angular/core/testing';

import { ConseilServiceService } from './conseil.service';

describe('ConseilServiceService', () => {
  let service: ConseilServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConseilServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
