import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '@/layouts/header/header';
import { BookmarksStore } from '@/store/bookmarks';
import { Notifications } from "./components/notifications/notifications";

@Component({
  selector: 'app-root',
  imports: [
    Header,
    RouterOutlet,
    Notifications
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Bookmarker');
  protected store = inject(BookmarksStore);
}
