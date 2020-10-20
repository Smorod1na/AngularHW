import { Component, OnInit } from '@angular/core';
import {Event} from '../../events/event.model';
import { EventService } from '../../events/event.service';
@Component({
  selector: 'app-event2-list',
  templateUrl: './event2-list.component.html',
  styleUrls: ['./event2-list.component.scss']
})
export class Event2ListComponent implements OnInit {

  constructor(private eventsService:EventService) { }

  events:Event[];
  
  ngOnInit() {
    this.events=this.eventsService.getNotAllVisibleEvents();
    this.eventsService.refreshList.subscribe((events:Event[])=>{
      this.events=events;
    })
  
  }
}
