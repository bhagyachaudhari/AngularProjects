import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipetest',
  templateUrl: './pipetest.component.html',
  styleUrls: ['./pipetest.component.css']
})
export class PipetestComponent implements OnInit {

  name:string = "java";
  today:number = Date.now();
  str:string = "Hello Angular";
  money:number = 100;
  constructor() { }

  ngOnInit(): void {
  }

}
