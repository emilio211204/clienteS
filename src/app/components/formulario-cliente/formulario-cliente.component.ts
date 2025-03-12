import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../../service/cliente.service';

@Component({
  selector: 'app-formulario-cliente',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-cliente.component.html',
  styleUrl: './formulario-cliente.component.css'
})
export class FormularioClienteComponent {
  constructor (private servicio: ClienteService) { }

  
  nombre: any = '';
  apellido: any = '';
  email: any = '';
  password: any = '';
  username : any = '';
  

  guardarCliente(formulario:any) {
    this.servicio.postCliente(formulario.value).subscribe(()=>{
      window.location.reload()
    });
  }
}
