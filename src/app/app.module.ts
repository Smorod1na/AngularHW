import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { EventListComponent } from "./events/event-list/event-list.component"
import { AddEventComponent } from './events/add-event/add-event.component';
import { EventItemComponent } from './events/event-list/event-item/event-item.component';

import { TasksComponent } from './tasks/tasks.component';
import {TaskListComponent} from './tasks/task-list/task-list.component'
import {TaskItemComponent} from'./tasks/task-list/task-item/task-item.component'
import { MenuHeaderComponent } from './menu-header/menu-header.component';


@NgModule({
  declarations: [		
    AppComponent,
    EventsComponent,
    EventListComponent,
    EventItemComponent,
    AddEventComponent,
      TasksComponent,
      TaskListComponent,
      TaskItemComponent,
      MenuHeaderComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
