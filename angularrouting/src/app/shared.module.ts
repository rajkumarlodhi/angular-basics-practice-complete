import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { ShortenPipe } from './pipes/shorten.pipe';

@NgModule({
  declarations: [ShortenPipe, FilterPipe],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    ShortenPipe,
    FilterPipe,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
