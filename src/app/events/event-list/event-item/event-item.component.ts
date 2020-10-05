import { Component, Input, OnInit } from '@angular/core';
import {Event} from "../../event.model"
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

setPriority(){
  this.isPriority=!this.isPriority
}

  constructor() { }

  ngOnInit() {
  }

}
