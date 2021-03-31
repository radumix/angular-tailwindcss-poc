import { Component, OnInit } from '@angular/core';
import { data } from '../../../data';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  data = [... data];
  showModal = false;
  searchText="";
  sortOrder="asc"
  propertyName="first";
  constructor() { }
  toggleModal(){
    this.showModal = !this.showModal;
  }
  ngOnInit(): void {
  }

  sort(props: string){
    this.propertyName=props;
    this.sortOrder = this.sortOrder === "asc" ? 'desc' : 'asc';
  }

}
