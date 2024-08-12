import { TestBed } from '@angular/core/testing';

import { BookDBServiceService } from './book-dbservice.service';

describe('BookDBServiceService', () => {
  let service: BookDBServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookDBServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
