import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  genders = ['male', 'female'];
  signUpForm: FormGroup = Object();
  constructor() { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'username': new FormControl(null),
      'email': new FormControl(null),
      'gender': new FormControl(null),
    })
  }
  onSubmit() {
    console.log(this.signUpForm, 'reactive signup form data');
  }

}
