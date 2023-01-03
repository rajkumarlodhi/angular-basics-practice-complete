import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, tap, throwError } from "rxjs";
import { User } from "../auth/user.model";
export interface AuthResponseData {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) { }
    isLoggedIn = false;
    userSub = new BehaviorSubject<User>({ email: '', localId: '', _token: '', expirationDate: new Date, token: '' });
    signUp(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCHhP23tWbv_EAZ74vxCY-w-uKaBHbtDFU', { email, password, returnSecureToken: true }).pipe(catchError(this.getErrorHandler), tap<AuthResponseData>(this.handleUser.bind(this)));
    }
    login(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCHhP23tWbv_EAZ74vxCY-w-uKaBHbtDFU', { email, password, returnSecureToken: true }).pipe(catchError(this.getErrorHandler), tap<AuthResponseData>(this.handleUser.bind(this)));
    }

    private handleUser(response: AuthResponseData) {
        const expireDate = new Date(new Date().getTime() + +response.expiresIn * 1000);
        const user = new User(
            response.email,
            response.localId,
            response.idToken,
            expireDate);
        this.userSub.next(user);
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
            case "EMAIL_NOT_FOUND":
                errorMessage = 'Email Not Found!';
                break;
            case "INVALID_PASSWORD":
                errorMessage = "INVALID PASSWORD";
                break;
            case "USER_DISABLED":
                errorMessage = "USER_DISABLED";
                break;
        }
        return throwError(errorMessage);
    }
    logOut() {
        this.isLoggedIn = false;
    }
    isAuthenticated() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.isLoggedIn);
            }, 500)
        })
    }
}