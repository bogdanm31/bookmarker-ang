import {
  Component,
  output
} from '@angular/core';

import { Modal } from "@/components/modal/modal";

@Component({
  selector: 'app-bookmark-delete-modal',
  imports: [Modal],
  templateUrl: './bookmark-delete-modal.html',
  styleUrl: './bookmark-delete-modal.scss',
})
export class BookmarkDeleteModal {
  cancelDeleteHandler = output();
  confirmDeleteHandler = output();
}
