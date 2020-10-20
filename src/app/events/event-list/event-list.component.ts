import { Component, OnInit } from '@angular/core';
import { Event } from '../event.model';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {


  constructor(private eventsService: EventService) { }

  count: number = 1
test:number[]=[]
  events: Event[];
  selectedEvents:Event[]=[]
  goNext() {

  }

  goPrevious() {

  }

  goNumber() {

  }

  ngOnInit() {
    this.events = this.eventsService.getAllVisibleEvents();
    this.count=this.events.length/10
    
    if(this.events.length%10>0)
    this.count++;
    console.log(Math.round(this.count))

    for(let i=1;i<this.count;i++)
    {
      this.test.push(i)
    }

    for(let i=0;i<10;i++)
    {
      this.selectedEvents.push(this.events[i])
    }


    // this.eventsService.refreshList.subscribe((events: Event[]) => {
    //   this.events = events;
    // })

    this.eventsService.refreshList.subscribe((selectedEvents: Event[]) => {
      this.selectedEvents = selectedEvents;
    })


  }

}
