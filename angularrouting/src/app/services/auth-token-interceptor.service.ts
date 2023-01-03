import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { exhaustMap, Observable, take } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthTokenInterceptorService implements HttpInterceptor {
    constructor(private authService: AuthService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return this.authService.userSub.pipe(
            take(1),
            exhaustMap((user) => {
                if (!user.token) {
                    return next.handle(req);
                }
                let modifiedReq = req.clone({
                    params: req.params.append('auth', user.token),
                });
                return next.handle(modifiedReq);
            })
        );
    }
}