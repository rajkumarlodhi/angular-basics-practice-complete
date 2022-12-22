import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  title = 'angularservice';

  users: { name: string, status: string }[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.users = this.userService.users;
    console.log(this.users, 'useerss')
  }
  // updateStatus(id: any, status: string) {
  //   this.userService.updateStatus(id, status);
  // }
}
