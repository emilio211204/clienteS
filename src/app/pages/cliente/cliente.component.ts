import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cliente, ClienteService } from '../../service/cliente.service';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClientesComponent {
  constructor(private servicio: ClienteService){}

  clientes: Cliente[] = []

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