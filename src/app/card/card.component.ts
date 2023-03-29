import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  picture: string = "./assets/photo1.jpg";
  name: string = "David";
  age: number = 232;
  citation: any = "On ne fait pas d'oeufs sans casser d'omelettes ";

  isShow: boolean = true;
  toggleDisplay() {
    this.isShow = !this.isShow;
  }



}


