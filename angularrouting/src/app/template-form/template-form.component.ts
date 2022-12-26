import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  @ViewChild('f', { static: false }) signUpForm: NgForm = Object();
  submitted = false;
  gender = 'male';
  about = '';
  user = {
    username: '',
    email: '',
    gender: '',
    about: '',
  }
  constructor() { }

  ngOnInit(): void {
  }
  onFormSubmit() {
    console.log(this.signUpForm, 'form data++++')
    this.user.username = this.signUpForm.value.userdata.username;
    this.user.email = this.signUpForm.value.userdata.email;
    this.user.gender = this.signUpForm.value.gender;
    this.user.about = this.signUpForm.value.about;
    this.submitted = true;

    this.signUpForm.reset();
  }
  checkData() {
    console.log(this.signUpForm, 'chekc data changes');
  }
  fillValues() {
    this.signUpForm.form.patchValue({
      userdata: {
        username: 'Raj',
        email: 'raj@gmail.com'
      },
      about: 'test about'
    })
  }
}
