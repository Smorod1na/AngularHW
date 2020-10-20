import { EventEmitter, Injectable } from '@angular/core';
import { Task } from '../tasks/task.model';
import { Event } from './event.model'

@Injectable({
  providedIn: 'root'
})
export class EventService {

  refreshList = new EventEmitter<Event[]>();

  events: Event[] = [
    new Event(
      "JS events",
      "...",
      "https://lh3.googleusercontent.com/lzYcyNuHnyYbHE_Aw2ArR4iTK5DKXZliygd_rmOhY1-TR8_qGQQE_9DM7YZDRdFqwSK99nULOBo=w640-h400-e365-rj-sc0x00ffffff",
      "07.07.2017", 1
    ),
    new Event(
      "JS events2",
      "...",
      "https://www.insidescience.org/sites/default/files/3_crop_ngc6338.jpg",
      "07.07.2018", 2),
    new Event(
      "JS events3",
      "...",
      "https://cdn.mos.cms.futurecdn.net/BxZtwv3rZMNSzTakHxKV2Q.jpg",
      "07.07.2019", 3),

    new Event(
      "JS events4",
      "...",
      "https://lh3.googleusercontent.com/lzYcyNuHnyYbHE_Aw2ArR4iTK5DKXZliygd_rmOhY1-TR8_qGQQE_9DM7YZDRdFqwSK99nULOBo=w640-h400-e365-rj-sc0x00ffffff",
      "07.07.2017", 4
    ),
    new Event(
      "JS events5",
      "...",
      "https://www.insidescience.org/sites/default/files/3_crop_ngc6338.jpg",
      "07.07.2018", 5),
    new Event(
      "JS events6",
      "...",
      "https://cdn.mos.cms.futurecdn.net/BxZtwv3rZMNSzTakHxKV2Q.jpg",
      "07.07.2019", 6),

    new Event(
      "JS events7",
      "...",
      "https://lh3.googleusercontent.com/lzYcyNuHnyYbHE_Aw2ArR4iTK5DKXZliygd_rmOhY1-TR8_qGQQE_9DM7YZDRdFqwSK99nULOBo=w640-h400-e365-rj-sc0x00ffffff",
      "07.07.2017", 7
    ),
    new Event(
      "JS events8",
      "...",
      "https://www.insidescience.org/sites/default/files/3_crop_ngc6338.jpg",
      "07.07.2018", 8),
    new Event(
      "JS events9",
      "...",
      "https://cdn.mos.cms.futurecdn.net/BxZtwv3rZMNSzTakHxKV2Q.jpg",
      "07.07.2019", 9),

    new Event(
      "JS events10",
      "...",
      "https://lh3.googleusercontent.com/lzYcyNuHnyYbHE_Aw2ArR4iTK5DKXZliygd_rmOhY1-TR8_qGQQE_9DM7YZDRdFqwSK99nULOBo=w640-h400-e365-rj-sc0x00ffffff",
      "07.07.2017", 10
    ),
    new Event(
      "JS events11",
      "...",
      "https://www.insidescience.org/sites/default/files/3_crop_ngc6338.jpg",
      "07.07.2018", 11),
    new Event(
      "JS events12",
      "...",
      "https://cdn.mos.cms.futurecdn.net/BxZtwv3rZMNSzTakHxKV2Q.jpg",
      "07.07.2019", 12),

    new Event(
      "JS events13",
      "...",
      "https://lh3.googleusercontent.com/lzYcyNuHnyYbHE_Aw2ArR4iTK5DKXZliygd_rmOhY1-TR8_qGQQE_9DM7YZDRdFqwSK99nULOBo=w640-h400-e365-rj-sc0x00ffffff",
      "07.07.2017", 13
    ),
    new Event(
      "JS events14",
      "...",
      "https://www.insidescience.org/sites/default/files/3_crop_ngc6338.jpg",
      "07.07.2018", 14),
    new Event(
      "JS events3",
      "...",
      "https://cdn.mos.cms.futurecdn.net/BxZtwv3rZMNSzTakHxKV2Q.jpg",
      "07.07.2019", 15),

    new Event(
      "JS events16",
      "...",
      "https://lh3.googleusercontent.com/lzYcyNuHnyYbHE_Aw2ArR4iTK5DKXZliygd_rmOhY1-TR8_qGQQE_9DM7YZDRdFqwSK99nULOBo=w640-h400-e365-rj-sc0x00ffffff",
      "07.07.2017", 16
    ),
    new Event(
      "JS events17",
      "...",
      "https://www.insidescience.org/sites/default/files/3_crop_ngc6338.jpg",
      "07.07.2018", 17),
    new Event(
      "JS events18",
      "...",
      "https://cdn.mos.cms.futurecdn.net/BxZtwv3rZMNSzTakHxKV2Q.jpg",
      "07.07.2019", 18),

    new Event(
      "JS events19",
      "...",
      "https://lh3.googleusercontent.com/lzYcyNuHnyYbHE_Aw2ArR4iTK5DKXZliygd_rmOhY1-TR8_qGQQE_9DM7YZDRdFqwSK99nULOBo=w640-h400-e365-rj-sc0x00ffffff",
      "07.07.2017", 19
    ),
    new Event(
      "JS events20",
      "...",
      "https://www.insidescience.org/sites/default/files/3_crop_ngc6338.jpg",
      "07.07.2018", 20),
    new Event(
      "JS events21",
      "...",
      "https://cdn.mos.cms.futurecdn.net/BxZtwv3rZMNSzTakHxKV2Q.jpg",
      "07.07.2019", 21),
  ];










  events2: Event[] = []

  getAllVisibleEvents(): Event[] {
    return this.events.filter(x => x.isVisible == true).slice();
  }

  getNotAllVisibleEvents(): Event[] {
    return this.events2.filter(x => x.isVisible == false);
  }

  addEvent(newEvent: Event) {
    this.events.push(newEvent)
    this.refreshList.emit(this.events.slice())
  }


  setCurrentVisible(name: string) {
    let index = this.events.findIndex(x => x.name == name);
    this.events[index].isVisible = false
    let test = this.events[index]
    this.events2.push(test);
    this.events.splice(index, 1);
    this.refreshList.emit(this.events.slice())
  }

  setCurrentNotVisible(name: string) {
    let index = this.events2.findIndex(x => x.name == name);
    this.events2[index].isVisible = true
    let test = this.events2[index]
    this.events.push(test);
    this.events2.splice(index, 1);
    this.refreshList.emit(this.events2.slice())

  }

  setEventTask(id: number, task: Task) {
    let index = this.events.findIndex(x => x.id == id);
    this.events[index].currentTasks.push(task)
  }

  getEventTasksById(id): Event {
    let index = this.events.findIndex(x => x.id == id);
    return this.events[index]
  }
  constructor() { }

}
// ng generate service events/event