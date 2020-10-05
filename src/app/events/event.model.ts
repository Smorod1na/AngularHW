export class Event{
public name:string;
public description:string;
public image_url:string;
public dateStarted:string;

constructor(name:string,description:string,image_url:string,dateStarted:string){
    this.name=name;
    this.description=description;
    this.image_url=image_url;
    this.dateStarted=dateStarted;
}
}