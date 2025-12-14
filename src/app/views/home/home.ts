import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";

import { BookmarksStore } from '@/store/bookmarks';
import { BookmarkListItem } from '@/features/bookmarks/bookmark-list-item/bookmark-list-item';

@Component({
  selector: 'app-home',
  imports: [
    BookmarkListItem,
    RouterLink
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  providers: [
    
  ]
})
export class Home implements OnInit {
  store = inject(BookmarksStore);
  
  ngOnInit() {
    this.store.getAll();
  }
}
