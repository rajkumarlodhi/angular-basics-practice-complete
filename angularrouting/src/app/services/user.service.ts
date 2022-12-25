import { EventEmitter } from '@angular/core'
export class UserService {
    userAddedEvent = new EventEmitter<boolean>();
    addUser() {
        this.userAddedEvent.emit(true);
    }
}