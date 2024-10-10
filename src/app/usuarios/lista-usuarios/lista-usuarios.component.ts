import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../../models/usuarios';
import { LocalStorageService } from '../../services/local-storage.service';
@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html'
})
export class ListaUsuariosComponent implements OnInit {
  usuarios: Usuarios[] = [];

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit() {
    this.usuarios = this.localStorageService.obtenerUsuarios();
  }
}
