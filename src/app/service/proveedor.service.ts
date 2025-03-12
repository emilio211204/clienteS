import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Proveedor{
  id: number;
  nombre : string;
  especialidad: string;
  experiencia: string;
  tarifas: string;
  correo: string;
  
}


@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor( private http: HttpClient) { }


}
