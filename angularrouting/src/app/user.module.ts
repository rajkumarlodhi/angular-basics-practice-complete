import { NgModule } from '@angular/core';
import { EditUserComponent } from './edit-user/edit-user.component';
import { SharedModule } from './shared.module';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [UsersComponent, UserComponent, EditUserComponent],
  imports: [UserRoutingModule, SharedModule],
})
export class UserModule {}
