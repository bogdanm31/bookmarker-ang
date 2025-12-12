import { TestBed } from '@angular/core/testing';

import { BookmarksService } from './bookmarks';

describe('Bookmarks', () => {
  let service: BookmarksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookmarksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
