import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { map, Observable, tap } from "rxjs";

export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('send request intereptor ');
        let modifiedRequest = req.clone({
            headers: req.headers.append('auth', 'abc'),
            params: req.params.append('hai', 'Helo world')
        })
        return next.handle(modifiedRequest).pipe(tap((event) => {
            console.log(event, 'on interceptor');
            console.log('Response from interceptor');
            if (event.type === HttpEventType.Response) {
                console.log(event.body, 'on boddy');
            }
        }));
    }

}