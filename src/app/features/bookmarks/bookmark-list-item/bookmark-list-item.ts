import { Component, input } from '@angular/core';
import { RouterLink } from "@angular/router";

import { BookmarkItem } from '@/utils/types/bookmark';
import { Icon } from '@/components/icon/icon';

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
  bookmark = input<BookmarkItem>({
    id: '',
    name: '',
    url: '',
    date_created: '',
    last_updated: ''
  });
}
