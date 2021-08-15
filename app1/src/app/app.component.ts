import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msg:string = "Welcome to Angular Framework!!";

  firstName:string = "Bhagyashri";
  age:number = 29;

  handleSubmitBtn(){
    this.firstName = "Raj";
    this.age = 31;
  }
}
