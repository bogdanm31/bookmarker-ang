import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkEditForm } from './bookmark-edit-form';

describe('BookmarkEditForm', () => {
  let component: BookmarkEditForm;
  let fixture: ComponentFixture<BookmarkEditForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookmarkEditForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookmarkEditForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
