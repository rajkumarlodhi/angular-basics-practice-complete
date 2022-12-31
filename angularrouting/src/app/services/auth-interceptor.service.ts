import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class AuthInterceptorService implements HttpInterceptor {
    // intercept(req: HttpRequest<any>, next: HttpHandler) {
    //     return next.handle(req);
    // }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('send request intereptor ');
        return next.handle(req);
    }

}