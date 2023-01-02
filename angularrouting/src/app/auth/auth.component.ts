import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";
import { AuthResponseData, AuthService } from "../services/auth.service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
})
export class AuthComponent {
    isLoading: boolean = false;
    isLoginMode = true;
    passwordErrors: any = '';
    error: string = '';
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

        let authObs: Observable<AuthResponseData>;
        if (this.isLoginMode) {
            this.authService.login(authForm.value.email, authForm.value.password).subscribe({
                next: (response) => {
                    this.isLoading = false;
                    console.log(response);
                },
                error: (errorMessage) => {
                    this.error = errorMessage;
                    this.isLoading = false;
                    console.log(errorMessage, 'ON AUTH');
                },
            });
        } else {
            this.authService.signUp(authForm.value.email, authForm.value.password).subscribe({
                next: (response) => {
                    this.isLoading = false;
                    console.log(response);
                },
                error: (errorMessage) => {
                    this.error = errorMessage;
                    this.isLoading = false;
                    console.log(errorMessage, 'ON AUTH');
                },
            });
        }

        // authObs.subscribe(response => {
        //     this.isLoading = false;
        //     console.log(response);
        // }, (errorMessage) => {
        //     this.error = errorMessage;
        //     this.isLoading = false;
        //     console.log(errorMessage, 'ON AUTH');
        // })
        // authObs.subscribe({
        //     next: (response) => {
        //         this.isLoading = false;
        //         console.log(response);
        //     },
        //     error: (errorMessage) => {
        //         this.error = errorMessage;
        //         this.isLoading = false;
        //         console.log(errorMessage, 'ON AUTH');
        //     },
        // })
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