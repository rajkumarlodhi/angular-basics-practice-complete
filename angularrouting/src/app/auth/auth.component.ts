import { Component } from "@angular/core";
import { FormControl, NgForm } from "@angular/forms";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
})
export class AuthComponent {
    isLoginMode = true;
    passwordErrors: any = '';
    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }
    constructor() { }
    onFormSubmit(authForm: NgForm) {
        console.log(authForm.value);
        // console.log(authForm);
        //console.log(authForm.form.controls['email'].errors?.['required']);
    }
    getPasswordErrors(password: any) {
        console.log(password, 'password');
        if (!password.valid && password.touched) {
            this.passwordErrors = 'Password is requiredd';
        }
        if (password.errors) {
            this.passwordErrors = 'Password should be of 6 characters length';
        }

    }
}