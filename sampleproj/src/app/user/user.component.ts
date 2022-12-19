import { Component, OnInit, Input, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ContentChild } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('user') userName = '';
  @Input() name = '';
  @ContentChild('userParagraph') userParagraph: string = '';
  constructor() {
    console.log('constructor called');
  }

  ngOnChanges() {
    console.log('ngOnChange called');
  }

  ngOnInit(): void {
    console.log(this.userParagraph, '--userParagraph');
    console.log('ngOnInit Called');
  }

  ngDoCheck(): void {
    console.log(this.userParagraph, 'userParagraph');
    console.log('ngDoCheck is called!');
  }

  ngAfterContentInit(): void {
    console.log(this.userParagraph, 'userParagraph');
    console.log('ngAfterContentInit is called');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked is called');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit is called');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked is called');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy is called');
  }
}
