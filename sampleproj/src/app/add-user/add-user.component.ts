import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @Output() userAdded = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  onUserAdded(input: any) {
    console.log(input.value);
    this.userAdded.emit(input.value)
  }

}
