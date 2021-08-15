import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {

  cities:string[] = ["Murbad", "Kalyan", "Thane", "Nanded", "Banglore", "Pune"];

  employees:Employee[] = [
    new Employee(101, 'Bhagyashri', 40000),
    new Employee(102, 'Raj', 70000)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
