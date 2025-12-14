import { Component, input } from '@angular/core';
import { RouterLink } from "@angular/router";

import { BookmarkItem } from '@/utils/types/bookmark';
import { draftBookmark } from '@/utils/constants/bookmarks';

import { Icon } from '@/components/ui/icon/icon';

@Component({
  selector: 'app-bookmark-list-item',
  imports: [
    Icon,
    RouterLink
  ],
  templateUrl: './bookmark-list-item.html',
  styleUrl: './bookmark-list-item.scss',
})
export class BookmarkListItem {
  bookmark = input<BookmarkItem>(draftBookmark);
}
