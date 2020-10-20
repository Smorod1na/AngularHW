import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EventService } from '../../event.service';
import {Event} from "../../event.model"
import {TaskItemComponent} from "../../../tasks/task-list/task-item/task-item.component"
@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.css']
})
export class EventInfoComponent implements OnInit {
  currentEvent:Event
  id:number
  constructor( private route:ActivatedRoute,
    private eventService:EventService) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      this.id=params["id"];})
this.currentEvent=this.eventService.getEventTasksById(this.id);
  }

}
