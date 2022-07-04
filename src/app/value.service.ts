import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValueService {

  constructor() { }

 async myMethod(value:string): Promise<void> {
    alert("New value (from service): " + value);
 }
}
