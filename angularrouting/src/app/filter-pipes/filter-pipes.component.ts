import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-pipes',
  templateUrl: './filter-pipes.component.html',
  styleUrls: ['./filter-pipes.component.css']
})
export class FilterPipesComponent implements OnInit {
  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('User Data Recieved');
    }, 3000);
  })
  filteredString: string = '';
  users = [{ name: 'Aman', dob: new Date('1996-12-10') }, { name: 'Rohit', dob: new Date('1995-10-15') }, { name: 'Divyesh', dob: new Date('1994-06-05') }];
  constructor() { }

  ngOnInit(): void {
  }
  onAddUser() {
    this.users.push({
      name: 'Sample',
      dob: new Date('2000-04-20')
    });
  }

}
