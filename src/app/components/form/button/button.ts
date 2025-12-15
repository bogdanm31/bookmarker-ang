import { ButtonRole } from '@/utils/types/ui';

import {
  Component,
  input,
  output
} from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  clickHandler = output();
  disabled = input<boolean>();
  role = input<ButtonRole>();

  handleClick() {
    if (this.disabled()) {
      return;
    }
    this.clickHandler.emit();
  }
}
