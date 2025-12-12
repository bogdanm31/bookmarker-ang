import { Component, input, OnInit, output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BookmarkItemFormData } from '@/utils/types/bookmark';
import { urlPatternValidator } from '@/utils/helpers/validators';

import { Button } from "@/components/form/button/button";
import { Textfield } from '@/components/form/textfield/textfield';
import { Card } from "@/components/ui/card/card";
import { Icon } from "@/components/ui/icon/icon";

@Component({
  selector: 'app-bookmark-edit-form',
  imports: [
    Button,
    Textfield,
    Card,
    Icon
],
  templateUrl: './bookmark-edit-form.html',
  styleUrl: './bookmark-edit-form.scss',
})
export class BookmarkEditForm implements OnInit {
  bookmark = input<BookmarkItemFormData>({
    id: null,
    name: '',
    url: '',
  });
  submitForm = output<BookmarkItemFormData>();

  formData: any = new FormGroup({});

  saveBookmark() {
    if (!this.formData.valid) {
      return;
    }
    
    this.submitForm.emit({
      id: this.bookmark().id,
      ...this.formData.value
    } as BookmarkItemFormData);
  }

  ngOnInit(): void {
    this.formData = new FormGroup({
      name: new FormControl(this.bookmark().name, [
        Validators.required
      ]),
      url: new FormControl(this.bookmark().url, [
        Validators.required,
        urlPatternValidator()
      ])
    });
  }
}
