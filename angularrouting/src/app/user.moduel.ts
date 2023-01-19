import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AuthGuard } from './services/guards/auth.guard';
import { DeactivateGuardService } from './services/guards/deactivate-guard.service';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [UsersComponent, UserComponent, EditUserComponent],
  imports: [
    FormsModule,
    RouterModule,
    CommonModule,
    RouterModule.forRoot([
      {
        path: 'users',
        component: UsersComponent,
        canActivate: [AuthGuard],
        children: [
          { path: ':id/:name', component: UserComponent },
          {
            path: ':id/:name/edit',
            component: EditUserComponent,
            canDeactivate: [DeactivateGuardService],
          },
        ],
      },
    ]),
  ],
  exports: [UserComponent, EditUserComponent],
})
export class UserModule {}
