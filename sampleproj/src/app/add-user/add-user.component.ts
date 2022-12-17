import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @Output() userAdded = new EventEmitter<string>();

  @ViewChild('userInput') userInput: any;

  constructor() { }
  ngOnInit(): void {
  }
  onUserAdded() {
    console.log(this.userInput.nativeElement.value);
    this.userAdded.emit(this.userInput.nativeElement.value)
  }

}
