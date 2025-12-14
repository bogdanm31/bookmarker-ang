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
      .getBookmark(this.bookmark().id!, (response: any) => {
        this.bookmark.set(response);
      })
  }

  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  store = inject(BookmarksStore);
  bookmark = signal<BookmarkItem>({...draftBookmark, id: this.activatedRoute.snapshot.params['id']});
  
  updateBookmark(data: BookmarkItemFormData) {
    this.store.updateBookmark(this.bookmark().id!, {...this.bookmark(), ...data}, () => {
      this.router.navigate(['/']);
    });
  }
}
