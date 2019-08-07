import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-calculator-dial',
  templateUrl: './calculator-dial.component.html',
  styleUrls: ['./calculator-dial.component.css']
})
export class CalculatorDialComponent implements OnInit {

  @Input() result:string='';

  constructor() { }

  ngOnInit() {
  }

}
