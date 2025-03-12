import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ClienteService } from '../../service/cliente.service';
import { FormularioClienteComponent } from "../../components/formulario-cliente/formulario-cliente.component";

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule, FormularioClienteComponent],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClientesComponent {
  constructor(private servicio: ClienteService){}

  clientes: any[] = []

  ngOnInit(){
    this.servicio.getClientes().subscribe({
      next: (data) => {
        this.clientes = data;
        console.log('Clientes cargados:', this.clientes);
      },
      error: (error) => {
        console.error('Error al cargar clientes:', error);
      }
    });
  }
}