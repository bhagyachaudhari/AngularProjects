import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifelse',
  templateUrl: './ifelse.component.html',
  styleUrls: ['./ifelse.component.css']
})
export class IfelseComponent implements OnInit {

  marks:number = 100;
  status:boolean = false;
  constructor() { 
    if(this.marks > 50){
      this.status = true;
    }
  }

  ngOnInit(): void {
  }

}
