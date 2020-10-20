import { Component, Input, OnInit } from '@angular/core';
import {Event} from '../../../events/event.model';

import { EventService } from '../../../events/event.service';

@Component({
  selector: 'app-event2-item',
  templateUrl: './event2-item.component.html',
  styleUrls: ['./event2-item.component.scss']
})
export class Event2ItemComponent implements OnInit {

  @Input() currentEvent:Event;
@Input() index:number;
isPriority:boolean=true;

setPriority(){
  this.isPriority=!this.isPriority
}
constructor(private eventService:EventService) { }

setVisible(name:string){
  this.currentEvent.isVisible=!this.currentEvent.isVisible
 
   this.eventService.setCurrentNotVisible(name)
  //  this.eventService.refreshList.subscribe((event:Event)=>{
  //   this.currentEvent=event;})
}

  ngOnInit() {
  }

}
