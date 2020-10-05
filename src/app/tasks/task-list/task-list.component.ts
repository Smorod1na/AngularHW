import { Component, OnInit } from '@angular/core';
import {Task} from '../task.model'
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

tasks:Task[]=[
  new Task(
    "Task1 work"
  ),
  new Task(
    "Task2 work"
  ),
  new Task(
    "Task3 work"
  )
]

  constructor() { }

  ngOnInit() {
  }

}
