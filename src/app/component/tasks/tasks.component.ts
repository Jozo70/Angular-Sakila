import { Component, OnInit } from '@angular/core';
//import {TaskService} from 'src/app/services/task.service';

import {Task} from 'src/app/Task';
import {TASKS} from 'src/app/mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASKS;

  constructor() { }

  ngOnInit(): void {
  }

}