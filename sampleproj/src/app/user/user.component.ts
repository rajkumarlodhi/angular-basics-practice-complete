import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnChanges {
  @Input('user') userName = '';
  @Input() name = '';
  constructor() {
    console.log('constructor called');
    console.log(this.userName, 'userName');
  }

  ngOnChanges() {
    console.log('ngOnChange called');
    // console.log(element);
  }

  ngOnInit(): void {
    console.log('ngOnInit Called');
  }

}
