import { Component, OnInit, OnDestroy } from '@angular/core';
import UserService from '../core/services/user.service';
import User from '../core/models/User';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  users: User[];
  selectedUser: User;
  subscription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.subscription = this.userService.getUsers()
      .subscribe(users => {
        this.users = users;
      });
  }

  selectUser(user: User): void {
    this.selectedUser = user;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
