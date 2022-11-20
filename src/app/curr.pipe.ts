import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'curr'
})
export class CurrPipe implements PipeTransform {

  transform(currencies:any): any {
    const firstKey = Object.keys(currencies)[0];
    return currencies[firstKey].name;
  }

}
