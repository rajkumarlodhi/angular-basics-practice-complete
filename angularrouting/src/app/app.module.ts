import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/guards/auth-guard.service';
import { DeactivateGuardService } from './services/guards/deactivate-guard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { LogginInterceptorService } from './services/logging-interceptor.service';
import { NavigationComponent } from './navigation/navigation.component';
import { AuthTokenInterceptorService } from './services/auth-token-interceptor.service';
import { PlaceholderDirective } from './shared/Placeholder.directive';
import { UserModule } from './user.module';
import { PostModule } from './post.module';
import { AuthModule } from './auth.module';
import { FilterModule } from './filter.module';
import { UserResolveService } from './services/resolvers/user-resolve.service';
import { CoreModuel } from './core.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    PageNotFoundComponent,
    TemplateFormComponent,
    ReactiveFormsComponent,
    NavigationComponent,
    PlaceholderDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    UserModule,
    PostModule,
    AuthModule,
    AppRoutingModule,
    HttpClientModule,
    FilterModule,
    UserModule,
    CoreModuel,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
