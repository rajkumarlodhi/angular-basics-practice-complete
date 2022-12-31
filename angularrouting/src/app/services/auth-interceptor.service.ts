import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { map, Observable } from "rxjs";

export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('send request intereptor ');
        let modifiedRequest = req.clone({
            headers: req.headers.append('auth', 'abc'),
            params: req.params.append('hai', 'Helo world')
        })
        return next.handle(modifiedRequest);
    }

}