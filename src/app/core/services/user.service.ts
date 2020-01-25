import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { users } from '../mocks/mock_data';
import User from '../models/User';

@Injectable({
  providedIn: 'root',
})

export default class UserService {
  getUsers(): Observable<User[]> {
    return of(users);
  }
}
