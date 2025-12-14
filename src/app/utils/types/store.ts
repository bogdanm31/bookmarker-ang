import { BookmarkItem } from "./bookmark";

export type BookmarksState = {
  bookmarks: BookmarkItem[];
  isPending: boolean;
  notifications: Notification[];
  query: string;
};

export enum NotificationType {
  Success = 'success',
  Warning = 'warning',
  Error = 'danger'
};

export type Notification = {
  id: string;
  message: string;
  type: NotificationType;
};