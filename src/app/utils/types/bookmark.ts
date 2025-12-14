export type BookmarkItem = {
  id: string | null;
  name: string;
  url: string;
  date_created: string;
  last_updated: string | null;
};

export type BookmarkItemFormData = Pick<BookmarkItem, 'name' | 'url'>;