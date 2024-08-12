import { TestBed } from '@angular/core/testing';

import { NotesDBServiceService } from './notes-dbservice.service';

describe('NotesDBServiceService', () => {
  let service: NotesDBServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotesDBServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
