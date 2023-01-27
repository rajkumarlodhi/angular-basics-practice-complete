import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FilterPipesComponent } from './filter-pipes/filter-pipes.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [FilterPipesComponent],

  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'filter-pipe', component: FilterPipesComponent },
    ]),
  ],
  exports: [FilterPipesComponent, SharedModule],
})
export class FilterModule {}
