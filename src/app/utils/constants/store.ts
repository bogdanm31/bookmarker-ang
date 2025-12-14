import { BookmarksState } from "@/utils/types/store";

export const initialState: BookmarksState = {
  bookmarks: [],
  isPending: false,
  notifications: [],
  query: ''
};