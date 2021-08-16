import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'codesbs';
  color:string="orange";
  err=true;

  updateColor(){
    //this.color = "blue";
    this.err=!this.err;
  }
}
