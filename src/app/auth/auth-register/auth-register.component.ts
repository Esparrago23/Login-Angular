import { Component } from '@angular/core';
import { Usuarios } from '../../models/usuarios';
import { LocalStorageService } from '../../services/local-storage.service';
@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html'
})
export class AuthRegisterComponent {
  nuevoUsuario: Usuarios = new Usuarios(0, '', '', '');
  usuarios: Usuarios[] = [];

  constructor(private localStorageService: LocalStorageService) {
    this.usuarios = this.localStorageService.obtenerUsuarios();
  }

  registrar() {
    const id = this.usuarios.length + 1;
    this.nuevoUsuario.id = id;

    this.localStorageService.agregarUsuario({...this.nuevoUsuario});

    this.nuevoUsuario = new Usuarios(0, '', '', '');
    alert('Usuario registrado exitosamente!');
  }
}
