import { Injectable } from '@angular/core';
import { Usuarios } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private storageKey: string = 'usuarios';

  constructor() {}

  obtenerUsuarios(): Usuarios[] {
    const usuariosGuardados = localStorage.getItem(this.storageKey);
    return usuariosGuardados ? JSON.parse(usuariosGuardados) : [];
  }

  agregarUsuario(nuevoUsuario: Usuarios) {
    const usuarios = this.obtenerUsuarios();
    usuarios.push(nuevoUsuario);
    localStorage.setItem(this.storageKey, JSON.stringify(usuarios));
  }

  borrarUsuarios() {
    localStorage.removeItem(this.storageKey);
  }
}
