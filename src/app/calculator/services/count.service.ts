import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountService {

  constructor() { }

  public getResult(result:string) {
    let equation:string[];
    let symbol:string[]=[];
    let variation:string[]=[];
    let assist:number[]=[];
    equation = result.split(' ');
    this.allocate(equation,symbol,variation);
    this.calculate(variation,assist);
    return ''+assist.pop();
  }

  private allocate(equation:string[],symbol:string[],variation:string[]){
    while (equation.length!=0){
      let e = equation.shift();
      if(e >= '0' && e<= '9'){
        variation.push(e);
      }else {
        this.check(e,symbol,variation);
      }
    }
    while (symbol.length!=0){
      let s = symbol[symbol.length - 1];
      variation.push(s);
      symbol.pop();
    }
  }

  private check(e:string, symbol:string[], variation:string[]){
    if(symbol.length == 0){
      symbol.push(e);
      return;
    }
    if(e=='(' || e==')'){
      if(e=='('){
        symbol.push(e);
      }else {
        while (symbol[symbol.length-1]!='('){
          variation.push(symbol[symbol.length-1]);
          symbol.pop();
        }
        symbol.pop();
      }
    }else {
      let s = symbol[symbol.length-1];
      if(this.getRank(e)<=this.getRank(s)){
        symbol.pop();
        variation.push(s);
        this.check(e,symbol,variation);
      }else {
        symbol.push(e);
      }
    }
  }

  private getRank(e:string){
    switch (e){
      case '+':
      case '-':
        return 0;
        break;
      case '*':
      case '/':
        return 1;
        break;
      case '(':
      case ')':
        return -1;
        break;
    }
  }

  private calculate(variation:string[],assist:number[]){
    while (variation.length!=0){
      let v = variation.shift();
      if(v >= '0' && v <= '9'){
        let p:number = parseInt(v);
        assist.push(p);
      }else {
        let p1 = assist.pop();
        let p2 = assist.pop();
        switch (v){
          case '+':
            assist.push(p2+p1);
            break;
          case '-':
            assist.push(p2-p1);
            break;
          case '*':
            assist.push(p2*p1);
            break;
          case '/':
            assist.push(p2/p1);
            break;
        }
      }
    }
  }

}
