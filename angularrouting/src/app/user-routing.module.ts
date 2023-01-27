import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AuthGuard } from './services/guards/auth.guard';
import { DeactivateGuardService } from './services/guards/deactivate-guard.service';
import { UserResolveService } from './services/resolvers/user-resolve.service';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';

const userRoutes = [
  {
    path: '',
    component: UsersComponent,
    canActivate: [AuthGuard],
    children: [
      { path: ':id/:name', component: UserComponent },
      {
        path: ':id/:name/edit',
        component: EditUserComponent,
        canDeactivate: [DeactivateGuardService],
        resolve: { user: UserResolveService },
      },
    ],
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
