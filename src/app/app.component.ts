import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button'
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PageContentComponent } from "./components/page-content/page-content.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, NavbarComponent, SidebarComponent, PageContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ManualEjercicios_5A_230389';
}