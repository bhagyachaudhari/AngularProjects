import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  //@Input() hero:any;
  @Input() heroObj:any;
  @Output() parentFunction:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.warn(this.heroObj);
    this.parentFunction.emit("Neha");
  }

}
