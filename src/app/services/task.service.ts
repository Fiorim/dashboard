import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { ListItem } from '../interfaces/list-item.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: ListItem[] = require('../../assets/mock-data.json').tasks;

  constructor() { }

  getTasks():  Observable<ListItem[]> {
    return of(this.tasks);
  }

}


