import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-tailwind-example';
  constructor(private http: HttpClient){}
  ngOnInit() {
    this.readTextFile();
   }

  readTextFile()
  {
      this.http.get('pdfbase64.txt', {responseType: 'text'})
        .subscribe(data => console.log(data));
  }

}
