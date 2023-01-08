import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { User } from '../auth/user.model';
export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
  isLoggedIn = false;
  userSub = new BehaviorSubject<User>({
    email: '',
    localId: '',
    _token: '',
    expirationDate: new Date(),
    token: '',
  });
  clearTimeOut: any = '';
  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCHhP23tWbv_EAZ74vxCY-w-uKaBHbtDFU',
        { email, password, returnSecureToken: true }
      )
      .pipe(
        catchError(this.getErrorHandler),
        tap<AuthResponseData>(this.handleUser.bind(this))
      );
  }
  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCHhP23tWbv_EAZ74vxCY-w-uKaBHbtDFU',
        { email, password, returnSecureToken: true }
      )
      .pipe(
        catchError(this.getErrorHandler),
        tap<AuthResponseData>(this.handleUser.bind(this))
      );
  }

  private handleUser(response: AuthResponseData) {
    const expireDate = new Date(
      new Date().getTime() + +response.expiresIn * 1000
    );
    console.log(expireDate, 'expireDate extend+++');
    console.log(new Date(), 'expireDate without extend+++');
    let date = new Date().getTime();
    console.log(date, 'expireDate without extend+++');

    const user = new User(
      response.email,
      response.localId,
      response.idToken,
      expireDate
    );
    this.userSub.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
    console.log(user, 'user++++++handleUser');
    this.autoLogout(+response.expiresIn * 1000);
  }

  getErrorHandler(errorRes: HttpErrorResponse) {
    let errorMessage = 'An error ocurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'Email already exists!';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'Email Not Found!';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'INVALID PASSWORD';
        break;
      case 'USER_DISABLED':
        errorMessage = 'USER_DISABLED';
        break;
    }
    return throwError(errorMessage);
  }
  autoLogin() {
    let userData: {
      email: string;
      _token: string;
      expirationDate: string;
      localId: string;
    } = JSON.parse(localStorage.getItem('userData') || '{}');
    console.log(userData, 'userData console-1 ++++++++++');
    console.log(
      Date.parse(userData.expirationDate),
      'userData.expirationDate console-11 ++++++++++'
    );
    if (
      JSON.stringify(userData) === '{}' ||
      (userData._token === '' && userData.email == '')
    ) {
      console.log(userData, 'userData console-2 ++++++++++');

      return;
    }
    let user = new User(
      userData.email,
      userData.localId,
      userData._token,
      new Date(userData.expirationDate)
    );
    console.log(userData, 'userData console-3 ++++++++++');

    if (user._token) {
      console.log(userData, 'userData console-4 ++++++++++');

      this.userSub.next(user);
    }
    let date = new Date().getTime();
    let expirationDate = new Date(userData.expirationDate).getTime();
    console.log(expirationDate, 'expirationDate++++');
    console.log(date, 'date++++');
    console.log(userData, 'userData console-5 ++++++++++');

    this.autoLogout(expirationDate + date);
  }
  autoLogout(expirationDate: number) {
    console.log(expirationDate, 'console-6 expirationDate++++');

    this.clearTimeOut = setTimeout(() => {
      this.logOut();
    }, expirationDate);
  }
  logOut() {
    this.userSub.next({
      email: '',
      localId: '',
      _token: '',
      expirationDate: new Date(),
      token: '',
    });
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.clearTimeOut) {
      clearTimeout(this.clearTimeOut);
    }
  }

  isAuthenticated() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLoggedIn);
      }, 500);
    });
  }
}
