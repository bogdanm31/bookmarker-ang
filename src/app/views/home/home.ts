import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from "@angular/router";

import { BookmarkListItem } from "@/features/bookmarks/bookmark-list-item/bookmark-list-item";
import { BookmarksService } from '@/services/bookmarks';
import { BookmarkItem } from '@/utils/types/bookmark';

@Component({
  selector: 'app-home',
  imports: [
    BookmarkListItem,
    RouterLink
],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  bookmarksService = inject(BookmarksService);
  bookmarks = signal<BookmarkItem[]>([]);

  checkCreatedDay(created: string) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const date_created = new Date(created);
    date_created.setHours(0, 0, 0, 0);

    if (today.toDateString() === date_created.toDateString()) {
      return 'Today';
    }
    if (today.getTime() - date_created.getTime() <= 24 * 60 * 60 * 1000) {
      return 'Yesterday';
    }
    return 'Older';
  }

  ngOnInit() {
    this.bookmarksService.getBookmarks()
      .subscribe(response => {
        this.bookmarks.set(response);
      })
  }
}
