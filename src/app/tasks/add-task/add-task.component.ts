import { Component, OnInit } from '@angular/core';
import{Task} from '../task.model'
import {TaskService} from '../task.service'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

export class AddTaskComponent implements OnInit {

  newTitle:string;
  newDescription:string;
  newDate:string;

  constructor(
    private taskService:TaskService
    ) { }

   
  sendNewTaskt()
{
  const task=new Task(this.newTitle,this.newDescription,this.newDate);
  this.taskService.addTask(task)
}  ngOnInit() {
  }

}
