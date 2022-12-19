import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  // encapsulation: ViewEncapsulation.None //to apply css to all components which are using in users.ts
})
export class UsersComponent implements OnInit {
  usersList: string[] = ['Rajkumar'];
  name: string = "Rajkumar";
  constructor() { }

  ngOnInit(): void {
  }
  onUserAdded(user: any) {
    console.log(user, 'userdd++++++== on users comppontn');
    this.usersList.push(user);
  }
  onNameChange() {
    this.name = 'Hai Rajkumar';
  }
  deleteUser() {
    this.usersList = []
  }

}
