import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, propName: string): any[] {
    if (value.length === 0 || filterString.length === 0) {
      return value;
    }

    return value.filter(item => item[propName] === filterString);
  }

}
