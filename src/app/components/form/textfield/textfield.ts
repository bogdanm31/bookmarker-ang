import {
  Component,
  computed,
  input,
  signal
} from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule
} from '@angular/forms';

import { Icon } from "@/components/ui/icon/icon";

@Component({
  selector: 'app-textfield',
  imports: [
    Icon,
    ReactiveFormsModule
],
  templateUrl: './textfield.html',
  styleUrl: './textfield.scss',
})
export class Textfield {
  border = input<string>();
  color = input<string>();
  model = input.required<FormControl>();
  label = input<string>();
  name = input<string>();
  placeholder = input<string>('');
  prefix = input<string>();
  isValidated = signal<boolean>(false);

  isValid = computed(() => !this.isValidated() || this.model().valid);
}
