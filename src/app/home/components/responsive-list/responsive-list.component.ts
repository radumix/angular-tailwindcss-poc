import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger, state } from "@angular/animations";
@Component({
  selector: 'app-responsive-list',
  templateUrl: './responsive-list.component.html',
  styleUrls: ['./responsive-list.component.scss'],
  animations: [
    trigger('leftPane', [
      state('in', style({
        overflow: 'hidden',
        width: '100%',
      })),
      state('out', style({
        overflow: 'hidden',
        width: '30%',
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('600ms ease-in-out'))
    ]),
     trigger('rightPane', [
      state('in', style({
        opacity: 0,
        width:0,
      })),
      state('out', style({
        opacity: 1,
        width: '70%',
      })),
      transition('in => out', animate('500ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ])
  ]
})
export class ResponsiveListComponent implements OnInit {
  leftPane: string;
  rightPane: string;
  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  filename: string;
  constructor() { }

  ngOnInit(): void {
    this.leftPane = 'in';
    this.rightPane = 'in';
  }

  closeRightPane(): void {
    this.leftPane =  'in';
    this.rightPane = 'in';
  }

  openRightPane(filename): void {
    this.leftPane = 'out';
    this.rightPane =  'out';
    this.filename=filename;
  }

  
}
