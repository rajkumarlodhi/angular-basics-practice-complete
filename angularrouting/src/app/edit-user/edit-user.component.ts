import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IDeactivateGuard } from '../services/guards/deactivate-guard.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit, IDeactivateGuard {
  user: { id: string, name: string } = { id: '', name: '' };
  editUser: { id: string, name: string } = { id: '', name: '' };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      console.log(data, 'data++++');
      this.user = {
        id: data['id'],
        name: data['name']
      }
      this.editUser = { ...this.user }
    })
  }
  canExit() {
    // console.log(this.user, 'user++');
    // console.log(this.editUser, 'editUserdata++');

    if (this.user.id !== this.editUser.id || this.user.name !== this.editUser.name) {
      if (confirm('You will lost all changes! Are you sure you want to exit')) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }

}
