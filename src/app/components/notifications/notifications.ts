import { Component, inject } from '@angular/core';
import { BookmarksStore } from '@/store/bookmarks';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.scss',
})
export class Notifications {
  store = inject(BookmarksStore);
}
