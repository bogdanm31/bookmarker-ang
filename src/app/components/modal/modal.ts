import {
  Component,
  input,
  output
} from '@angular/core';

import { Button } from "@/components/form/button/button";

@Component({
  selector: 'app-modal',
  imports: [Button],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class Modal {
  cancelButtonText = input<string>();
  okButtonText = input<string>();
  title = input<string>();

  closeHandler = output();
  okHandler = output();
}
