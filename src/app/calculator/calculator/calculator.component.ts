import { Component, OnInit } from '@angular/core';
import {CountService} from "../services/count.service";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  result:string='';

  constructor(
    private countService:CountService
  ) { }

  ngOnInit() {
  }

  equation(equation:string) {
    this.result=this.result+equation;
  }

  eliminate() {
    this.result='';
  }

  count() {
    this.result=this.countService.getResult(this.result);
  }

}
