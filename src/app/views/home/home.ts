import {
  Component,
  inject,
  OnInit,
  signal
} from '@angular/core';
import { RouterLink } from "@angular/router";

import { BookmarksStore } from '@/store/bookmarks';
import { BookmarkListItem } from '@/features/bookmarks/bookmark-list-item/bookmark-list-item';
import { BookmarkDeleteModal } from "@/features/bookmarks/modals/bookmark-delete-modal/bookmark-delete-modal";

@Component({
  selector: 'app-home',
  imports: [
    BookmarkListItem,
    RouterLink,
    BookmarkDeleteModal
],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  store = inject(BookmarksStore);
  idPendingDeletion = signal<string | undefined>(undefined);

  deleteBookmark() {
    this.store.deleteBookmark(this.idPendingDeletion()!);
    this.idPendingDeletion.set(undefined);
  }
  
  ngOnInit() {
    this.store.getAll();
  }
}
