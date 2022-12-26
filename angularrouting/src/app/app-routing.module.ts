import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { UserComponent } from './user/user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './services/guards/auth-guard.service';
import { DeactivateGuardService } from './services/guards/deactivate-guard.service';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
const appRoutes: Routes = [
    { path: '', component: HomeComponent, data: { page: 1, search: 'Rajkumar' } },
    {
        path: 'users',
        component: UsersComponent,
        canActivateChild: [AuthGuardService],
        children: [
            { path: ':id/:name', component: UserComponent },
            { path: ':id/:name/edit', component: EditUserComponent, canDeactivate: [DeactivateGuardService] }
        ]
    },
    { path: 'templateform', component: TemplateFormComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'reactiveforms', component: ReactiveFormsComponent },
    { path: 'not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: 'not-found' },
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule { }