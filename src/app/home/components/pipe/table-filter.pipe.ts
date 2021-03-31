import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {
  result=[];
  transform(value: any[], str: string, prop?: any): any {  
   this.result=[];
    if (!value) {  
      return [];  
    }  
    if (!str || !prop) {  
      return value;  
    }
    const searchStr= str.toLowerCase();  
      for (let index = 0; index < prop.length; index++) {
        const element = prop[index];
        let filtered = value.filter(el => el[element].toString().toLowerCase().includes(searchStr));
        if(filtered){
          filtered.forEach(res=>{
            this.result.push(res);
          })
        }
      }
      function distinctArr(value, index, self) {
        return self.indexOf(value) === index;
      }
      return this.result.filter(distinctArr);
  }
}
