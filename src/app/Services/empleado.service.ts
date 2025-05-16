
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { appsettings } from '../settings/appsettings';
import { Empleado } from '../Models/Empleado';
import { ResponseApi } from '../Models/ResposeApi';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor() { }

  private http= inject(HttpClient);
  private apiurl: string = appsettings.ApiUrl+"Empleado";

  lista() {
    return this.http.get<Empleado[]>(this.apiurl);
  }
  obtener(id: number) {
    return this.http.get<Empleado>(this.apiurl + "/" + id);
  }
  crear(objeto: Empleado) {
    return this.http.post<ResponseApi>(this.apiurl, objeto);
  }

  editar(objeto: Empleado) {
    return this.http.put<ResponseApi>(this.apiurl, objeto);
  }

  eliminar(id: number) {
    return this.http.delete<ResponseApi>(this.apiurl + "/" + id);
  }

}
