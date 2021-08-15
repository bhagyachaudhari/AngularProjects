import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

  marks:number = 20;
  color:string = "";

  constructor() { 
    if(this.marks >= 35){
      this.color = "green";
    }else{
      this.color = "red";
    }
  }

  ngOnInit(): void {
  }

}
