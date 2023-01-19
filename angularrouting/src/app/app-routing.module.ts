import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { UserComponent } from './user/user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DeactivateGuardService } from './services/guards/deactivate-guard.service';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { FilterPipesComponent } from './filter-pipes/filter-pipes.component';
import { AuthGuard } from './services/guards/auth.guard';
const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { page: 1, search: 'Rajkumar' } },
  { path: 'templateform', component: TemplateFormComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'reactiveforms', component: ReactiveFormsComponent },
  { path: 'filter-pipe', component: FilterPipesComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
