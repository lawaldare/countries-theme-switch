import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'lang',
    standalone: true
})
export class LangPipe implements PipeTransform {

  transform(languages: any): any {
    return Object.values(languages)
  }

}
