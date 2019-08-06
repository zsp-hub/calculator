import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {CountService} from "../services/count.service";

@Component({
  selector: 'app-calculator-keyboard',
  templateUrl: './calculator-keyboard.component.html',
  styleUrls: ['./calculator-keyboard.component.css']
})
export class CalculatorKeyboardComponent implements OnInit {

  equation:String='';

  @Output() equationChanges = new EventEmitter<String>();


  constructor(
    private count:CountService
  ) {}

  ngOnInit() {
  }

  input(value:string) {
    this.equation = this.equation + value;
    this.equationChanges.emit(this.equation.trim());
  }

  eliminate() {
    this.equation = '';
    this.equationChanges.emit(this.equation.trim());
  }


}
