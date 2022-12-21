import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { LoggingService } from '../services/Logging.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [LoggingService]
})
export class AddUserComponent implements OnInit {
  @Output() userAdded = new EventEmitter<string>();

  @ViewChild('userInput') userInput: any;

  constructor(private LoggingService: LoggingService) { }
  ngOnInit(): void {
  }
  onUserAdded() {
    console.log(this.userInput.nativeElement.value);
    this.userAdded.emit(this.userInput.nativeElement.value)
    this.LoggingService.getToLogging('user added is: ' + this.userInput.nativeElement.value);
  }

}
