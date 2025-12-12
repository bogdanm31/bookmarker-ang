import { AbstractControl } from "@angular/forms";

export const urlPattern = /(http(s)*:\/\/)*[a-zA-Z0-9](\.[a-zA-Z0-9])+(\/.)*/;

export const urlPatternValidator = () => {
  return (control: AbstractControl) => control.value.match(urlPattern)
    ? null
    : { forbidden: {value: control.value} };
}