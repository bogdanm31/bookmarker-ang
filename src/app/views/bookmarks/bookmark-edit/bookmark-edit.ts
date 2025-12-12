import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BookmarksService } from '@/services/bookmarks';
import { BookmarkItem, BookmarkItemFormData } from '@/utils/types/bookmark';
import { BookmarkEditForm } from "@/features/bookmarks/bookmark-edit-form/bookmark-edit-form";
import { generateDate } from '@/utils/helpers/date';

@Component({
  selector: 'app-bookmark-edit',
  imports: [BookmarkEditForm],
  templateUrl: './bookmark-edit.html',
  styleUrl: './bookmark-edit.scss',
})
export class BookmarkEdit implements OnInit {
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  isPending = signal<boolean>(false);
  bookmarksService = inject(BookmarksService);
  bookmark = signal<BookmarkItem>({
    id: this.activatedRoute.snapshot.params['id'],
    name: '',
    url: '',
    date_created: '',
    last_updated: ''
  });

  updateBookmark(data: BookmarkItemFormData) {
    if (this.isPending()) {
      return;
    }
    this.isPending.set(true);
    const { id, date_created } = this.bookmark();
    const last_updated = generateDate();
    this.bookmarksService
      .updateBookmark(id!, {
        ...data,
        date_created,
        last_updated
      })
      .subscribe(() => {
        this.isPending.set(false);
        this.router.navigate(['/']);
      });
  }

  ngOnInit(): void {
    this.isPending.set(true);
    this.bookmarksService
      .getBookmark(this.bookmark().id!)
      .subscribe(response => {
        this.bookmark.set(response as BookmarkItem);
        this.isPending.set(false);
      });
  }
}
