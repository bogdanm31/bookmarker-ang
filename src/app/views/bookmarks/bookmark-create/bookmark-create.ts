import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { BookmarksStore } from '@/store/bookmarks';
import { BookmarkItemFormData } from '@/utils/types/bookmark';

import { BookmarkEditForm } from "@/features/bookmarks/bookmark-edit-form/bookmark-edit-form";

@Component({
  selector: 'app-bookmark-create',
  imports: [
    BookmarkEditForm
  ],
  templateUrl: './bookmark-create.html',
  styleUrl: './bookmark-create.scss',
})
export class BookmarkCreate {
  router = inject(Router);
  store = inject(BookmarksStore);

  createBookmark(data: BookmarkItemFormData) {
    this.store.createBookmark(data, () => {
      this.router.navigate(['']);
    });
  }
}
