import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  show=false;
  constructor() { }

  ngOnInit(): void {
  }

  toogle(){
    this.show = true;
  }

}
