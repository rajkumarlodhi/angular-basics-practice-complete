import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { AuthGuard } from './services/guards/auth.guard';

@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'posts', component: PostsComponent, canActivate: [AuthGuard] },
    ]),
  ],
  exports: [PostsComponent],
})
export class PostModule {}
