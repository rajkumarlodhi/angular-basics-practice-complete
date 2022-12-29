import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  restrictedNames: string[] = ['Rajkumar'];
  signUpForm: FormGroup = Object();
  genders = ['male', 'female'];

  constructor() { }

  get hobbyControls() {
    return (<FormArray>this.signUpForm.get('hobbies')).controls;
  }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.isRestrictedNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('female'),
      'hobbies': new FormArray([])
    })
  }
  onSubmit() {
    console.log(this.signUpForm, 'reactive signup form data');
    console.warn(this.signUpForm.value.userData);
    // console.log(this.signUpForm.get('userData.username')?.valid);
    // console.log(this.signUpForm.get('userData.username')?.errors?.['required']);
  }
  onAddHobby() {
    const control = new FormControl(null, [Validators.required]);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
    console.log(this.signUpForm);
  }
  isRestrictedNames(control: FormControl): { [s: string]: boolean } {
    if (this.restrictedNames.includes(control.value)) {
      return { nameIsRestricted: true };
    } else {
      return {};
    }
  }
  isRestrictedEmails(control: FormControl): Promise<any> | Observable<any> {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ emailIsRestricted: true })
        } else {
          resolve(null)
        }
      }, 2000);
    })
    return promise;
  }

}
