import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkDeleteModal } from './bookmark-delete-modal';

describe('BookmarkDeleteModal', () => {
  let component: BookmarkDeleteModal;
  let fixture: ComponentFixture<BookmarkDeleteModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookmarkDeleteModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookmarkDeleteModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
