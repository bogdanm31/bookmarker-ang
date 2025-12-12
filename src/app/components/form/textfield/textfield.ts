import { Component, input, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-textfield',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './textfield.html',
  styleUrl: './textfield.scss',
})
export class Textfield {
  formControl = input.required<FormControl>();
  label = input<string>();
  isValidated = signal<boolean>(false);
}
