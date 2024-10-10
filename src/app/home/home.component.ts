import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  mostrarLogin: boolean = true;
  mostrarRegistro: boolean = false;
  mostrarLista: boolean = false;

  cambiarVista(vista: string) {
    this.mostrarLogin = vista === 'login';
    this.mostrarRegistro = vista === 'registro';
    this.mostrarLista = vista === 'lista';
  }
}