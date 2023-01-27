import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { AuthTokenInterceptorService } from './services/auth-token-interceptor.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/guards/auth-guard.service';
import { DeactivateGuardService } from './services/guards/deactivate-guard.service';
import { LogginInterceptorService } from './services/logging-interceptor.service';
import { UserResolveService } from './services/resolvers/user-resolve.service';
import { UserService } from './services/user.service';

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LogginInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptorService,
      multi: true,
    },
    AuthService,
    AuthGuardService,
    DeactivateGuardService,
    UserService,
    UserResolveService,
  ],
})
export class CoreModuel {}
