import {
  Component,
  inject,
  signal
} from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';

import { BookmarkItem, BookmarkItemFormData } from '@/utils/types/bookmark';
import { BookmarksStore } from '@/store/bookmarks';

import { BookmarkEditForm } from "@/features/bookmarks/bookmark-edit-form/bookmark-edit-form";
import { draftBookmark } from '@/utils/constants/bookmarks';

@Component({
  selector: 'app-bookmark-edit',
  imports: [BookmarkEditForm],
  templateUrl: './bookmark-edit.html',
  styleUrl: './bookmark-edit.scss',
})
export class BookmarkEdit {
  constructor() {
    this.store
      .getBookmark(this.bookmarkId(), (response: any) => {
        this.bookmark.set(response);
      })
  }

  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  bookmarkId = signal(this.activatedRoute.snapshot.params['id']);
  store = inject(BookmarksStore);
  bookmark = signal<BookmarkItem>({
    id: this.bookmarkId(),
    ...draftBookmark
  });
  
  updateBookmark(data: BookmarkItemFormData) {
    this.store.updateBookmark(this.bookmarkId(), {...this.bookmark(), ...data}, () => {
      this.router.navigate(['/']);
    });
  }
}
