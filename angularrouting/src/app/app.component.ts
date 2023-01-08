import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angularrouting';
  userAdded = false;
  userAddedSubscription = new Subscription();
  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    // this.userAddedSubscription = this.userService.userAddedEvent.subscribe(data => {
    //   this.userAdded = data;
    // });
    this.authService.autoLogin();
  }
  onLoginClick() {
    // this.authService.login();
  }
  onLogoutClick() {
    this.authService.logOut();
  }
  ngOnDestroy(): void {
    //this.userAddedSubscription.unsubscribe();
  }
}
