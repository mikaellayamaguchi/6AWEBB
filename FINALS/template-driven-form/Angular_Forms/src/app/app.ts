import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Register } from './register/register';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Register],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular_Forms');
}
