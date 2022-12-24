
export class AuthService {
    isLoggedIn = false;
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