import { EventEmitter } from '@angular/core';
export class UserService {
  userAddedEvent = new EventEmitter<boolean>();
  addUser() {
    this.userAddedEvent.emit(true);
  }
  getUser(id: string) {
    console.log(id, 'id++++++++');
    if (id === '1') {
      console.log('RAjkumar++++++++');
      return { id: '1', name: 'Rajkumar' };
    } else {
      console.log('Krishna++++++++');
      return { id: '1', name: 'Krishna' };
    }
  }
}
