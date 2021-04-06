import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  @Input() id: string;
  private element: any;
  showModal=false;
  dataModel: any;
  constructor(
    private modalService: ModalService, private el: ElementRef
  ) {
    this.element = el.nativeElement;
   }

  ngOnInit(): void {
    this.loadData();
     // ensure id attribute exists
     if (!this.id) {
      console.error('modal must have an id');
      return;
     }

      // move element to bottom of page (just before </body>) so it can be displayed above everything else
      document.body.appendChild(this.element);

      // add self (this modal instance) to the modal service so it's accessible from controllers
      this.modalService.add(this);

  }

  loadData(){
    this.modalService.getData().subscribe(result=>{
      console.log(result);
      this.dataModel = result;
      console.log(this.dataModel);
    })
  }

   // remove self from modal service when component is destroyed
   ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
   }

   toggleModal(){
    this.showModal = !this.showModal;
  }

}
