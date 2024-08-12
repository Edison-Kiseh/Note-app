import { TestBed } from '@angular/core/testing';

import { BinService } from './bin.service';

describe('BinService', () => {
  let service: BinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
