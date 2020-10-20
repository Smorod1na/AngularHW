import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms'
import {AppRoutingModule} from './app-routing.module'

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { EventListComponent } from "./events/event-list/event-list.component"
import { AddEventComponent } from './events/add-event/add-event.component';
import { EventItemComponent } from './events/event-list/event-item/event-item.component';

import { TasksComponent } from './tasks/tasks.component';
import {TaskListComponent} from './tasks/task-list/task-list.component'
import {TaskItemComponent} from'./tasks/task-list/task-item/task-item.component'
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { HomeAppComponent } from './home-app/home-app.component';
import { Page404Component } from './page404/page404.component';
import { InfoAppComponent } from './about/info-app/info-app.component';
import { ContactAppComponent } from './about/contact-app/contact-app.component';
import { AboutComponent } from './about/about.component';
import { TestComponent } from './test/test.component';
import {AddTaskComponent} from './tasks/add-task/add-task.component'
import { Events2Component } from './events2/events2.component';
import {Event2ListComponent} from './events2/event2-list/event2-list.component'
import {Event2ItemComponent} from './events2/event2-list/event2-item/event2-item.component'
import {EventInfoComponent} from './events/event-list/event-info/event-info.component'
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
      MenuHeaderComponent,
      HomeAppComponent,
      Page404Component,
      InfoAppComponent,
      ContactAppComponent,
      AboutComponent,
      TestComponent,
      AddTaskComponent,
      Events2Component,
      Event2ListComponent,
      Event2ItemComponent,
      EventInfoComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
