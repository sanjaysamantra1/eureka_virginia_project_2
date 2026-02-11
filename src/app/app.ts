import { MaterialDemo } from './components/material-demo/material-demo';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [
    MaterialDemo
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('eureka_virginia_project_2');
}
