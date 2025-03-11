import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientesComponent } from './pages/cliente/cliente.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ClientesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clienteS';
}
