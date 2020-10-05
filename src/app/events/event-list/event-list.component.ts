import { Component, OnInit } from '@angular/core';
import {Event} from '../event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events:Event[]=[
    new Event(
"JS events",
"...",
"https://lh3.googleusercontent.com/lzYcyNuHnyYbHE_Aw2ArR4iTK5DKXZliygd_rmOhY1-TR8_qGQQE_9DM7YZDRdFqwSK99nULOBo=w640-h400-e365-rj-sc0x00ffffff",
"07.07.2017"),
new Event(
  "JS events2",
  "...",
  "https://www.insidescience.org/sites/default/files/3_crop_ngc6338.jpg",
  "07.07.2018"),
  new Event(
    "JS events3",
    "...",
    "https://cdn.mos.cms.futurecdn.net/BxZtwv3rZMNSzTakHxKV2Q.jpg",
    "07.07.2019"),
  ];




  constructor() { }

  ngOnInit() {
  }

}
