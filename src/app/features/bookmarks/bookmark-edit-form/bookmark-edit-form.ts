import {
  Component,
  inject,
  input,
  OnInit,
  output
} from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';

import { BookmarkItemFormData } from '@/utils/types/bookmark';
import { BookmarksStore } from '@/store/bookmarks';

import { Button } from "@/components/form/button/button";
import { Textfield } from '@/components/form/textfield/textfield';
import { Card } from "@/components/ui/card/card";
import { Icon } from "@/components/ui/icon/icon";

@Component({
  selector: 'app-bookmark-edit-form',
  imports: [
    Button,
    Card,
    FormsModule,
    Icon,
    Textfield,
],
  templateUrl: './bookmark-edit-form.html',
  styleUrl: './bookmark-edit-form.scss',
})
export class BookmarkEditForm implements OnInit {
  store = inject(BookmarksStore);
  bookmarkId = input<string>();
  name = input<string>('');
  url = input<string>('');
  formData = new FormGroup({
    name: new FormControl(this.name(), [ Validators.required ]),
    url: new FormControl(this.url(), [ Validators.required ])
  });
  submitForm = output<BookmarkItemFormData>();

  saveBookmark() {
    this.submitForm.emit(this.formData.value as BookmarkItemFormData);
  }

  ngOnInit(): void {
    this.formData.controls['name'].setValue(this.name());
    this.formData.controls['url'].setValue(this.url());
  }
}
