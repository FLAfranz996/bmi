import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],


})
export class HomePage {
  bmi : number = 0;
  status : string = "";
  height : any;
  weight : any;
  constructor() {}
  submit(){
    let height = this.height ? parseFloat(this.height) : 0;
    let weight = this.weight ? parseFloat(this.weight) : 0;
    this.bmi = weight/(height*height) ;

  }
}