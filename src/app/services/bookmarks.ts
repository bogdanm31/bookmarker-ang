import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

import { BookmarkItem, BookmarkItemFormData } from '@/utils/types/bookmark';
import { generateDate } from '@/utils/helpers/datetime';

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

  createBookmark(data: BookmarkItemFormData) {
    let { name, url } = data;
    if (!url.match(/http(s):\/\/.+/)) {
      url = `https://${url}`;
    }
    return this.http.post(`${this.baseUrl}/bookmarks`, {
      name,
      url,
      date_created: generateDate(),
      last_updated: null
    });
  }

  updateBookmark(id: string, data: Omit<BookmarkItem, 'id'>) {
    return this.http.put(`${this.baseUrl}/bookmarks/${id}`, data);
  }

  deleteBookmark(id: string) {
    return this.http.delete(`${this.baseUrl}/bookmarks/${id}`);
  }
}
