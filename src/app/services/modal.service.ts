import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals: any[] = [];
  private data = new BehaviorSubject<any[]>([]);
  private dataStore: { param: any[] } = { param: [] }; // store our data in memory
  readonly dataObs = this.data.asObservable();
  constructor() { }

getData() {
    return this.data.asObservable();
}

loadData(data: any){
  this.dataStore.param = data;
  this.data.next(Object.assign({}, this.dataStore).param);
}

add(modal: any) {
    // add modal to array of active modals
    this.modals.push(modal);
}

remove(id: string) {
    // remove modal from array of active modals
    this.modals = this.modals.filter(x => x.id !== id);
}

open(id: string, data?: any) {
  //store data
  this.loadData(data);
  
    // open modal specified by id
    const modal = this.modals.find(x => x.id === id);
    modal.toggleModal();

}

close(id: string) {
    // close modal specified by id
    const modal = this.modals.find(x => x.id === id);
    modal.toggleModal();
}

}
