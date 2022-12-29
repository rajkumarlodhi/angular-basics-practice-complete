import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: any) {
    const users = [];
    if (value.length === 0) {
      return value;
    }
    for (const user of value) {
      if (user['name'] === filterString) {
        users.push(user);
      }
    }
    return users;
  }

}
