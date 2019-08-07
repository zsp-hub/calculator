import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-calculator-keyboard',
  templateUrl: './calculator-keyboard.component.html',
  styleUrls: ['./calculator-keyboard.component.css']
})
export class CalculatorKeyboardComponent implements OnInit {

  @Output() equationChanges = new EventEmitter<string>();
  @Output() eliminateChanges = new EventEmitter();
  @Output() countChanges = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  equation(value:string) {
    this.equationChanges.emit(value);
  }

  eliminate() {
    this.eliminateChanges.emit();
  }

  count() {
    this.countChanges.emit();
  }

}
