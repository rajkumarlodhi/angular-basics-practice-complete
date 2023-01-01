import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
interface AuthResponseData {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
}
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) { }
    isLoggedIn = false;
    signUp(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCHhP23tWbv_EAZ74vxCY-w-uKaBHbtDFU', { email, password, returnSecureToken: true });
    }
    login() {
        this.isLoggedIn = true;
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