import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements OnInit {
  isAuthenticated = false;
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.authService.userSub.subscribe((user) => {
      //   console.log(user, 'data on navigation file');
      this.isAuthenticated = user.email && user._token ? true : false;
      console.log(this.isAuthenticated);
    });
  }
  onLogout(event: Event) {
    event.preventDefault();
    this.authService.logOut();
  }
}
