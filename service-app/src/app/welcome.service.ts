import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  constructor() { }
  getWelcomeMessage() : string{
    let msg:string = "Welcome to Service class";
    return msg;
  }
}
