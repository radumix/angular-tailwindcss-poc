import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name = 'NavigationBarProject';
  @HostBinding("class.drawer-open")
  isDrawerOpen: boolean = false;
  
  toggleDrawer(isDrawerOpen: boolean) {
    this.isDrawerOpen = isDrawerOpen;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
