import { inject } from "@angular/core";
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState
} from "@ngrx/signals";
import { catchError, of } from "rxjs";

import { BookmarksService } from "@/services/bookmarks";
import { BookmarkItemFormData } from "@/utils/types/bookmark";
import { NotificationType } from "@/utils/types/store";
import { initialState } from "@/utils/constants/store";
import { randomString } from "@/utils/helpers/notifications";

const BookmarksStore = signalStore(
  {providedIn: 'root'},
  withState(initialState),
  withComputed((store) => ({
    filteredBookmarks() {
      return store.bookmarks().filter(
        bookmark => bookmark.name
          .toLowerCase()
          .includes(store.query().toLowerCase())
      )
    }
  })),
  withMethods((store, bookmarksService = inject(BookmarksService)) => ({
    updateQuery(query: string) {
      patchState(store, { query });
    },
    addNotification(message: string, type = NotificationType.Success, timeout: number = 5000) {
      const id = randomString(5);
      patchState(store, (state) => ({
        ...state,
        isPending: false,
        notifications: [...state.notifications, { id, message, type }]
      }));
      setTimeout(() => {
        patchState(store, (state) => ({
          ...state,
          notifications: state.notifications.filter(
            n => n.id !== id
          )
        }));
      }, timeout ?? 5000);
    },
    getAll() {
      patchState(store, { isPending: true });
      bookmarksService
        .getBookmarks()
        .pipe(
          catchError(error => {
            this.addNotification(error.message || 'Some error happened!', NotificationType.Error);
            return of();
          })
        )
        .subscribe(
          (response) => {
            patchState(store, {
              bookmarks: response,
              isPending: false
            });
          }
        )
    },
    createBookmark(data: BookmarkItemFormData, callback?: Function) {
      patchState(store, { isPending: true });
      return bookmarksService
        .createBookmark(data)
        .pipe(
          catchError(error => {
            this.addNotification(error.message || 'Some error happened!', NotificationType.Error);
            return of();
          })
        )
        .subscribe(
          () => {
            patchState(store, { isPending: false });
            callback?.();
          }
        )
    },
    getBookmark(id: string, callback: Function) {
      patchState(store, { isPending: true });
      return bookmarksService
        .getBookmark(id)
        .pipe(
          catchError(error => {
            this.addNotification(error.message || 'Some error happened!', NotificationType.Error);
            return of();
          })
        )
        .subscribe(response => {
          patchState(store, { isPending: false });
          callback(response);
        })
    },
    updateBookmark(id: string, data: any, callback: Function) {
      patchState(store, { isPending: true });
      bookmarksService
        .updateBookmark(id, data)
        .pipe(
          catchError(error => {
            this.addNotification(error.message || 'Some error happened!', NotificationType.Error);
            return of();
          })
        )
        .subscribe(
          () => {
            patchState(store, { isPending: false });
            callback();
          }
        )
    },
    deleteBookmark(id: string) {
      bookmarksService
        .deleteBookmark(id)
        .pipe(
          catchError(error => {
            this.addNotification(error.message || 'Some error happened!', NotificationType.Error);
            return of();
          })
        )
        .subscribe(
          () => {
            patchState(store, (state) => ({
              ...state,
              bookmarks: state.bookmarks.filter(
                b => b.id !== id
              )
            }));
          }
        )
    }
  }))
);

export {
  BookmarksStore
};