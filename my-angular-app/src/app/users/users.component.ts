import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-users',
  // selector: '[app-users]',
  selector: '.app-users',
  templateUrl: './users.component.html',
  // styleUrls: ['./users.component.css']
  styles: [
    `h3{
      color:red;
    }
    `,
  ]
})
export class UsersComponent implements OnInit {
  allowNewUser = false;
  userCreatedStatus = "No user is created";
  userName = "Raj User";
  isUserCreated = false;
  users = ['User1', 'User2'];
  constructor() {
    setTimeout(() => {
      this.allowNewUser = true;
    }, 3000);
  }

  ngOnInit(): void {
  }

  changeUserCreatedStatus() {
    this.userCreatedStatus = "User is created";
    this.users.push(this.userName);
  }
  onUpdateUser(event: any) {
    this.isUserCreated = true;
    this.userName = (event.target as HTMLInputElement).value;
    // console.log(event, 'event+++');
    console.log(this.userName, 'username+++');
    // let userName = <HTMLInputElement>event.target.value;
  }

}
