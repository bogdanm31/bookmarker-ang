import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkListItem } from './bookmark-list-item';

describe('BookmarkListItem', () => {
  let component: BookmarkListItem;
  let fixture: ComponentFixture<BookmarkListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookmarkListItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookmarkListItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
