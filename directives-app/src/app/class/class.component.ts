import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  marks:number = 100;
  myClass:string = "";
  constructor() { 
    if(this.marks >= 70){
      this.myClass = "class1";
    }else{
      this.myClass = "class2";
    }
  }

  ngOnInit(): void {
  }

}
