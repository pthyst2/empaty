import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor() {}
  isControlInvalid(control: FormControl, submitted: boolean) {
    return (control.dirty || submitted) && control.invalid;
  }
  isCtrHasError(control: FormControl, errorName: string) {
    return control.errors?.[errorName];
  }
}
