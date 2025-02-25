import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ejercicio01Component } from './ejercicio-01/ejercicio-01.component';
import { Ejercicio02Component } from './ejercicio-02/ejercicio-02.component';
import { Ejercicio03Component } from './ejercicio-03/ejercicio-03.component';
import { MatButtonModule } from '@angular/material/button';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Ejercicio01Component, Ejercicio02Component, Ejercicio03Component, MatButtonModule, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Manual de Ejercicios - MATRICULA - INICIALES';
}