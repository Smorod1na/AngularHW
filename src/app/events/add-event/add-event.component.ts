import { Component, OnInit } from '@angular/core';
import {Event} from '../event.model'
import { EventService } from '../event.service';
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})

export class AddEventComponent implements OnInit {

  constructor(private eventService:EventService) { }

  newTitle:string;
  newDescription:string;
  newDate:string;
  newImage_Url:string;
  id:number=3
sendNewEvent(){
  const event=new Event(this.newTitle,this.newDescription,
    this.newImage_Url,this.newDate,this.id++);
    this.eventService.addEvent(event);
}

  ngOnInit() {
  }

}
