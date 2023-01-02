import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError } from "rxjs";
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
    signUp(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCHhP23tWbv_EAZ74vxCY-w-uKaBHbtDFU', { email, password, returnSecureToken: true }).pipe(catchError(errRes => {
            let errorMessage = 'An error ocurred!';
            if (!errRes.error || !errRes.error.error) {
                return throwError(errorMessage);
            }
            switch (errRes.error.error.message) {
                case 'EMAIL_EXISTS':
                    errorMessage = 'Email already exists!';
            }
            return throwError(errorMessage);
        }));
    }
    login(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCHhP23tWbv_EAZ74vxCY-w-uKaBHbtDFU', { email, password, returnSecureToken: true });
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