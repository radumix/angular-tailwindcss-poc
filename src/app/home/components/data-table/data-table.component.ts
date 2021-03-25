import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  showModal = false;
  constructor() { }
  toggleModal(){
    this.showModal = !this.showModal;
  }
  ngOnInit(): void {
  }

}
