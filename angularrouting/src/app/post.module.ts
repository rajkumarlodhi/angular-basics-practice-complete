import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { AuthGuard } from './services/guards/auth.guard';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [PostsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: PostsComponent, canActivate: [AuthGuard] },
    ]),
  ],
  exports: [PostsComponent],
})
export class PostModule {}
