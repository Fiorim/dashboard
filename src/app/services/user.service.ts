import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = require('../../assets/mock-data.json').user;

  constructor() { }

  getUser() {
    return of(this.user);
  }

}


