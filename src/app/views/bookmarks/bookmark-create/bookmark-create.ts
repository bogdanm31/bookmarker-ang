import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { generateDate } from '@/utils/helpers/date';
import { BookmarksService } from '@/services/bookmarks';

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
  bookmarksService = inject(BookmarksService);

  createBookmark(data: any) {
    let { url } = data;
    if (!url.match(/http(s):\/\/.+/)) {
      url = `https://${url}`;
    }
    this.bookmarksService.createBookmark({
      name: data.name,
      url,
      date_created: generateDate(),
      last_updated: null
    }).subscribe(response => {
      this.router.navigate(['/']);
    });
  }
}
