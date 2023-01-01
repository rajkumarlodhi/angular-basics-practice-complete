import { Component } from "@angular/core";
import { FormControl, NgForm } from "@angular/forms";
import { AuthService } from "../services/auth.service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
})
export class AuthComponent {
    isLoading: boolean = false;
    isLoginMode = true;
    passwordErrors: any = '';
    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }
    constructor(private authService: AuthService) { }
    onFormSubmit(authForm: NgForm) {
        //console.log(authForm.form.controls['email'].errors?.['required']);
        if (!authForm.valid) {
            return;
        }
        this.isLoading = true;
        if (this.isLoginMode) {

        } else {
            this.authService.signUp(authForm.value.email, authForm.value.password).subscribe(response => {
                this.isLoading = false;
                console.log(response);
            }, error => {
                this.isLoading = false;
                console.log(error);
            })
        }
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