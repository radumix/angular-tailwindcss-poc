import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name = 'NavigationBarProject';
  hideShow=true;
  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(){
    this.hideShow = this.hideShow ? false : true;
  }
}
