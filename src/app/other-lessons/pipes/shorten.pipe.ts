import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  // TODO what about ...args, what is the type there? is it automatically any?
  transform(value: any, ...args): any {
    if (value.length > 10) {
      return value.substr(0, 10) + ' ...';
    } else {
      return value;
    }
  }
}
