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

  //data:string = "Raj";

  dataObj = [{
    name:'bhagyac',
    age:29,
    email:'bhagyac@gmail.com'
  },{
    name:'raj',
    age:32,
    email:'raj@gmail.com'
  },{
    name:'kk',
    age:29,
    email:'kk@gmail.com'
  }]
  
  updateColor(){
    //this.color = "blue";
    this.err=!this.err;
  }

  parentFunction(data:any){
    console.warn(data);
  }
}
