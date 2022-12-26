import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  @ViewChild('f') signUpForm = NgForm;

  constructor() { }

  ngOnInit(): void {
  }
  onFormSubmit() {
    console.log(this.signUpForm, 'form data++++')
  }
  checkData() {
    console.log(this.signUpForm, 'chekc data changes');
  }

}
