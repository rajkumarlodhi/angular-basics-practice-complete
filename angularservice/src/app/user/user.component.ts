import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user = { name: '', status: '' };
  @Input() id: number = 0;
  constructor(private userService: UserService) { }

  ngOnInit(): void {

  }
  updateStatus(id: number, status: string) {
    this.userService.updateStatus(id, status);
  }

}
