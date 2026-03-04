import { BookmarkItem } from '@/utils/types/bookmark';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(bookmarks: BookmarkItem[], query: string): BookmarkItem[] {
    return bookmarks.filter(
        bookmark => bookmark.name
          .toLowerCase()
          .includes(query.toLowerCase())
      )
  }
}
