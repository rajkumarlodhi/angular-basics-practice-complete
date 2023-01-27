import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavigationComponent } from './navigation/navigation.component';
import { PlaceholderDirective } from './shared/Placeholder.directive';
import { UserModule } from './user.module';
import { AuthModule } from './auth.module';
import { FilterModule } from './filter.module';
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
