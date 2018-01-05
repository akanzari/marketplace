import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToastyModule} from 'ng2-toasty';

@NgModule({
  imports: [
    CommonModule,
    ToastyModule.forRoot(),
  ],
  declarations: [],
  providers: [],
  exports: [
    ReactiveFormsModule,
    RouterModule,
    ToastyModule,
  ]
})
export class SharedModule { }