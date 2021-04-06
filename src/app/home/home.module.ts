import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormLayoutComponent } from './components/form-layout/form-layout.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableFilterPipe } from './components/pipe/table-filter.pipe';
import { TableSortPipe } from './components/pipe/table-sort.pipe';
import { LoaderComponent } from './components/loader/loader.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { UserInfoComponent } from './components/modal/user-info/user-info.component';

@NgModule({
  declarations: [HomeComponent, FormLayoutComponent, DataTableComponent, ModalDialogComponent, TableFilterPipe, TableSortPipe, LoaderComponent, ButtonsComponent, UserInfoComponent],
  entryComponents: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class HomeModule { }
    
