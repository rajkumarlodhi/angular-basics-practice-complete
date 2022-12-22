import { Component, Input, OnInit } from '@angular/core';
import { LogService } from '../services/log.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user = { name: '', status: '' };
  @Input() id: number = 0;
  constructor(private userService: UserService, private logService: LogService) { }

  ngOnInit(): void {
  }
  updateStatus(id: number, status: string) {
    this.userService.updateStatus(id, status);
    this.logService.userLog();
  }

}
