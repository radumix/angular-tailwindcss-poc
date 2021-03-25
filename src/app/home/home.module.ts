import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormLayoutComponent } from './components/form-layout/form-layout.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';


@NgModule({
  declarations: [HomeComponent, FormLayoutComponent, DataTableComponent, ModalDialogComponent],
  entryComponents: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
    
