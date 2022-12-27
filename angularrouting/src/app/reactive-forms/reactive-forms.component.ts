import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  genders = ['male', 'female'];
  signUpForm: FormGroup = Object();
  // signUpForm = new FormGroup({
  //   'username': new FormControl('', Validators.required),
  //   'email': new FormControl('', [Validators.required, Validators.email]),
  //   'gender': new FormControl('female'),
  // });
  constructor() { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('female'),
    })
  }
  onSubmit() {
    console.log(this.signUpForm, 'reactive signup form data');
    console.warn(this.signUpForm.value);
  }

}
