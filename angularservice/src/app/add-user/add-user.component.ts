import { Component, OnInit } from '@angular/core';
import { LogService } from '../services/log.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userName: string = ''
  constructor(private userService: UserService, private logService: LogService) { }

  ngOnInit(): void {
  }
  onAddUser() {
    this.userService.addUser(this.userName, 'active');
    this.logService.userLog();
  }

}
