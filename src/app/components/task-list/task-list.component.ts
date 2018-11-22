import { Component, OnInit } from '@angular/core';
import { ListItem } from '../../interfaces/list-item.interface';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: ListItem[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe( tasks => {
      this.tasks = tasks;
    });
  }

}
