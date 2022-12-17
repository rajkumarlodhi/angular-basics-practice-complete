import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styles: [`.offline {
        color: white;
    }`]
})

export class UserComponent {
    userId = 10;
    userStatus: string;

    constructor() {
        this.userStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
    }

    getUserStatus() {
        return this.userStatus;
    }
    getColor() {
        if (this.userStatus == 'Online') {
            return 'green';
        } else {
            return 'red';
        }
    }
}

