import {
  Component,
  inject, 
  OnInit
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { Textfield } from "@/components/form/textfield/textfield";
import { BookmarksStore } from '@/store/bookmarks';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    Textfield
],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  store = inject(BookmarksStore);
  query = new FormControl<string>('');

  ngOnInit() {
    this.query.valueChanges
      .pipe(
        debounceTime(750)
      )
      .subscribe((res) => {
        this.store.updateQuery(res as string);
      })
  }
}
