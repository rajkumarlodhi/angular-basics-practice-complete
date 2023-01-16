import { Component, ComponentFactoryResolver } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from '../services/auth.service';
import { AlertModalComponent } from '../shared/alert-model/alert-modal.component';

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
  constructor(
    private authService: AuthService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}
  onFormSubmit(authForm: NgForm) {
    //console.log(authForm.form.controls['email'].errors?.['required']);
    if (!authForm.valid) {
      return;
    }

    this.isLoading = true;
    this.error = '';

    let authObs: Observable<AuthResponseData>;
    if (this.isLoginMode) {
      authObs = this.authService.login(
        authForm.value.email,
        authForm.value.password
      );
    } else {
      authObs = this.authService.signUp(
        authForm.value.email,
        authForm.value.password
      );
    }

    // authObs.subscribe(response => {
    //     this.isLoading = false;
    //     console.log(response);
    // }, (errorMessage) => {
    //     this.error = errorMessage;
    //     this.isLoading = false;
    //     console.log(errorMessage, 'ON AUTH');
    // })
    authObs.subscribe({
      next: (response) => {
        this.isLoading = false;
        // console.log(response);
        this.router.navigate(['/']);
      },
      error: (errorMessage) => {
        this.error = errorMessage;
        this.showErrorAlert(errorMessage);
        this.isLoading = false;
      },
    });
  }
  showErrorAlert(message: string) {
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(
        AlertModalComponent
      );
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
