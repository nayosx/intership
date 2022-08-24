import { Component, ViewEncapsulation } from '@angular/core';
import { Archivo } from './interfaces/archivo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'intership';

  listaDeArchivos:Archivo[] = [
    {
      nombre: 'posters',
      url: 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/05/poke%CC%81mon-ultimate-journeys.jpg?fit=1280%2C720&quality=80&ssl=1'
    },
    {
      nombre: 'poster arceus',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqMz_UrQhiQP-mkmj-C_2WT_AmZy3gluQyVw&usqp=CAU'
    }
  ];



  public isShowMessage:boolean = false;

  public handlerBtn():void {
    console.log("hola mundo");

    this.isShowMessage = !this.isShowMessage;
  }
}
