import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

interface User {
  id: string;
  name: string;
}
@Injectable()
export class UserResolveService implements Resolve<User> {
  constructor(private userService: UserService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User> | Promise<User> | User {
    let id = route.params['id'];
    let details = this.userService.getUser(id);
    return details;
  }
}
