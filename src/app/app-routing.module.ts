import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactAppComponent } from './about/contact-app/contact-app.component';
import { InfoAppComponent } from './about/info-app/info-app.component';
import { EventsComponent } from './events/events.component';
import { HomeAppComponent } from './home-app/home-app.component';
import { Page404Component } from './page404/page404.component';
import { TestComponent } from './test/test.component';
import {Events2Component} from './events2/events2.component'
import {TasksComponent} from './tasks/tasks.component'
import{EventInfoComponent} from './events/event-list/event-info/event-info.component'
import {EventListComponent} from './events/event-list/event-list.component'
const routes: Routes = [
{path:"",redirectTo:"/home",pathMatch:"full"},
{path:"home",pathMatch:"full",component:HomeAppComponent},
{path:"events",component:EventsComponent,
children:[
  { path:"list",component:EventListComponent},
 { path:":id",component:EventInfoComponent}
]},


{path:"events2",pathMatch:"full",component:Events2Component},
{path:"about",component:AboutComponent,
children:[
 {path:"contact",component:ContactAppComponent },
 {path:"info",component:InfoAppComponent },
 {path:":id",component:TestComponent}
]},
{path:"tasks",pathMatch:"full",component:TasksComponent},
{path:"#",pathMatch:"full",component:Page404Component}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }