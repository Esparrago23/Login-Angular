import { Injectable } from '@angular/core';
import { Usuarios } from '../../models/usuarios';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  usuarios: Usuarios[] = []
  isAuthenticated: boolean = false;
  constructor() { }
}
