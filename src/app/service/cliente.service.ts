import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

// Definimos una interfaz para tipar los datos correctamente
export interface Cliente {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
}
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private API_CLIENTES = 'http://localhost:8080/cliente';

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.API_CLIENTES).pipe(
      catchError(error => {
        console.error('Error obteniendo clientes:', error);
        return throwError(() => new Error('Error al obtener los clientes. Inténtelo de nuevo más tarde.'));
      })
    );
  }
}
