import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoggingService } from '../services/Logging.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  // encapsulation: ViewEncapsulation.None //to apply css to all components which are using in users.ts
  providers: [LoggingService]
})
export class UsersComponent implements OnInit {
  usersList: string[] = ['Rajkumar'];
  name: string = "Rajkumar";
  isAvailable: boolean = true;
  value: Number = 53;
  constructor(private LoggingService: LoggingService) { }

  ngOnInit(): void {
  }
  onUserAdded(user: any) {
    console.log(user, 'userdd++++++== on users comppontn');
    this.usersList.push(user);
  }
  onNameChange() {
    this.name = 'Hai Rajkumar';
    // let loggingService = new LoggingService();
    this.LoggingService.getToLogging(`user is changedd : ${this.name}`);
  }
  deleteUser() {
    this.usersList = []
  }

}
