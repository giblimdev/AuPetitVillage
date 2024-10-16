import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { first } from 'rxjs';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  formGroup = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    agename: new FormControl('0'),
    comment: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });
  onSubmit() {
    console.log(this.formGroup.value);
  }
}
