import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorDialComponent } from './calculator-dial/calculator-dial.component';
import { CalculatorKeyboardComponent } from './calculator-keyboard/calculator-keyboard.component';
import {CountService} from "./services/count.service";




@NgModule({
  declarations: [CalculatorComponent, CalculatorDialComponent, CalculatorKeyboardComponent],
  imports: [
    CommonModule
  ],
  exports: [CalculatorComponent],
  providers: [CountService]
})
export class CalculatorModule { }
