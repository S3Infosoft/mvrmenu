import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DineInComponent } from './dine-in.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


const ROUTES:Routes=[{ path: '', component: DineInComponent}];

@NgModule({
  declarations: [DineInComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ROUTES) ,
  ]
})
export class DineInModule { }
