import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-pipes',
  templateUrl: './filter-pipes.component.html',
  styleUrls: ['./filter-pipes.component.css']
})
export class FilterPipesComponent implements OnInit {

  users = [{ name: 'Aman', dob: '1996-12-10' }, { name: 'Rohit', dob: '1995-10-15' }, { name: 'Divyesh', dob: '1994-06-05' }];
  constructor() { }

  ngOnInit(): void {
  }

}
