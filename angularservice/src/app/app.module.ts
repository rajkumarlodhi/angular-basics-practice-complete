import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms'
import { UserService } from './services/user.service';
import { LogService } from './services/log.service';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UserService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
