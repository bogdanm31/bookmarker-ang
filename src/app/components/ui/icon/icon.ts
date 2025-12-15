import { Component, input } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-icon',
  imports: [AngularSvgIconModule],
  templateUrl: './icon.html',
  styleUrl: './icon.scss',
})
export class Icon {
  className = input<string>();
  icon = input.required<string>();
}
