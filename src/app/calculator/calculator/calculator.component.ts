import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  result:String='';

  constructor() { }

  ngOnInit() {
  }

  input(equation:String) {
    this.result=equation;
    console.log(this.result);
  }
}
