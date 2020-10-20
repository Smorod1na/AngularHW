import { EventEmitter, Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  refreshList = new EventEmitter<Task[]>();

  tasks: Task[] = [
    new Task(
      "Task1 title",
      "Description for task 1",
      "07.07.2012"
    ),
    new Task(
      "Task2 title",
      "Description for task 2",
      "07.07.2013"
    ),
    new Task(
      "Task3 title",
      "Description for task 3",
      "07.07.2015"
    ),
    new Task(
      "Task4 title",
      "Description for task 4",
      "07.07.2018"
    )
  ]
  constructor() { }

  getAllTasks(): Task[] {
    return this.tasks.slice();
  }

  addTask(newTask: Task) {
    this.tasks.push(newTask)
    this.refreshList.emit(this.tasks.slice())
  }

}
