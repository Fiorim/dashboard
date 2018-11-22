import { Component, OnInit } from '@angular/core';
import { ListItem } from '../../interfaces/list-item.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: ListItem[] = [
    {
      title: 'Meeting',
      description: 'Topic: Sprint Review',
      color: '#0066ff'
    },
    {
      title: 'Develop Chart Component',
      description: 'Finish by Thursday',
      color: '#ff5050'
    },
    {
      title: 'Create unity tests',
      description: 'Cover 60% of application',
      color: '#00cc00'
    },
    {
      title: 'Overview',
      description: 'Give a overview of the project to the new developer',
      color: '#eee022'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
