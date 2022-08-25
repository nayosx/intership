import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ArchivoPDF } from '../interfaces/archivo-pdf';

@Component({
  selector: 'app-lista-de-imagenes',
  templateUrl: './lista-de-imagenes.component.html',
  styleUrls: ['./lista-de-imagenes.component.scss']
})
export class ListaDeImagenesComponent implements OnInit {

  public arregloDeArchivosPDFs:ArchivoPDF[] = [];

  constructor() { }

  ngOnInit(): void {
    this.llenarDatosDeArreglo();
  }

  private llenarDatosDeArreglo():void {
    this.arregloDeArchivosPDFs = [
      {
        nombre: 'Archivo 1',
        url: `${environment.multimedia}/contratos/adhesion/contrato-cuenta-ahorro-futuro.pdf`
      },

      {
        nombre: 'Archivo 2',
        url: `${environment.multimedia}/contratos/adhesion/contrato-cuenta-ahorro.pdf`
      },

      {
        nombre: 'Archivo 3',
        url: `${environment.multimedia}/contratos/adhesion/contrato-deposito-cuenta-ahorro-super-ahorro.pdf`
      },

      {
        nombre: 'Archivo 4',
        url: `${environment.multimedia}/contratos/adhesion/contrato-netbanking-persona-juridica.pdf`
      },

      {
        nombre: 'Pacto Social',
        url: `${environment.multimedia}/gobierno-corporativo/pacto_social.pdf`
      }
    ];
  }

}
