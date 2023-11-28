import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private trigger = new Subject<void>()

  trigger$  = this.trigger.asObservable()

  triggerLoadData(){
    this.trigger.next()
  }

  constructor() { }
}
