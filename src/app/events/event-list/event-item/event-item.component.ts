import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Task } from 'src/app/tasks/task.model';
import { TaskService } from 'src/app/tasks/task.service';
import {Event} from "../../event.model"
import { EventService } from '../../event.service';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})

export class EventItemComponent implements OnInit {
  
// currentEvent= new Event("Name","Description","https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg","Date");

@Input() currentEvent:Event;
@Input() index:number;
isPriority:boolean=true;
tasks:Task[]
currentTask:Task[]=[]
refreshList = new EventEmitter<Task[]>();



setTask(event){
  let task=event.target.value
  let index=this.tasks.findIndex(x=>x.title==task)
  let t=this.tasks[index]
  this.currentTask.push(t)
  this.eventService.setEventTask(this.currentEvent.id,t)
      this.tasks.splice(index,1); 
      this.refreshList.emit(this.tasks.slice())    
}

setPriority(){
  this.isPriority=!this.isPriority
}

constructor(private eventService:EventService,
  private taskService:TaskService
 ) { }

setVisible(name:string){
   this.eventService.setCurrentVisible(name)
}

  ngOnInit() {
    this.tasks=this.taskService.getAllTasks();
   
  }

}
