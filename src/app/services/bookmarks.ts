import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

import { BookmarkItem } from '@/utils/types/bookmark';

@Injectable({
  providedIn: 'root',
})
export class BookmarksService {
  baseUrl = 'http://localhost:3000';
  http = inject(HttpClient);
  isPending = signal<boolean>(false);

  getBookmarks() {
    return this.http.get<BookmarkItem[]>(`${this.baseUrl}/bookmarks?_sort=-date_created`);
  }

  getBookmark(id: string) {
    return this.http.get<BookmarkItem>(`${this.baseUrl}/bookmarks/${id}`);
  }

  createBookmark(data: Omit<BookmarkItem, 'id'>) {
    return this.http.post(`${this.baseUrl}/bookmarks`, data);
  }

  updateBookmark(id: string, data: Omit<BookmarkItem, 'id'>) {
    return this.http.put(`${this.baseUrl}/bookmarks/${id}`, data);
  }
}
