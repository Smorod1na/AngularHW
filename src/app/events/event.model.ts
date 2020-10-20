import { Task } from '../tasks/task.model';

export class Event{
public name:string;
public description:string;
public image_url:string;
public dateStarted:string;
public isVisible:boolean;
public id:number
public currentTasks:Task[]=[]
constructor(name:string,description:string,image_url:string,dateStarted:string,id:number){
    this.name=name;
    this.description=description;
    this.image_url=image_url;
    this.dateStarted=dateStarted;
    this.isVisible=true;
    this.id=id;
}
}