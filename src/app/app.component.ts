import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'intership';



  public isShowMessage:boolean = false;

  public handlerBtn():void {
    console.log("hola mundo");

    this.isShowMessage = !this.isShowMessage;
  }
}
