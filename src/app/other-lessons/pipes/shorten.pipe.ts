import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  // TODO what about ...args, what is the type there? is it automatically any?
  // Used to have ...args as the second parameter, that represents variable arguments
  transform(value: any, limit: number): any {
    if (value.length > limit) {
      return value.substr(0, limit) + ' ...';
    }
    return value;
  }
}
