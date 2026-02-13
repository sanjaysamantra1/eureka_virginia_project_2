import { MaterialDemo } from './components/material-demo/material-demo';
import { Component, signal } from '@angular/core';
import { UnitTestingDemo } from './components/unit-testing-demo/unit-testing-demo';
import { CounterComponent } from './components/counter/counter.component';
import { TodoCrudComponent } from './components/todo-crud/todo-crud.component';

@Component({
  selector: 'app-root',
  imports: [
    // MaterialDemo
    // UnitTestingDemo
    // CounterComponent
    TodoCrudComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('eureka_virginia_project_2');
}
