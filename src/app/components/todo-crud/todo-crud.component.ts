import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { deleteTodo, toggleTodo } from '../../actions/todo.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-crud',
  standalone: true,
  templateUrl: './todo-crud.component.html',
  styleUrl: './todo-crud.component.css',
  imports: [CommonModule]
})
export class TodoCrudComponent {
  todos$: Observable<any> | undefined;

  constructor(private store: Store) {
    this.todos$ = this.store.select((state: any) => state.todoReducer); // Selector
  }

  deleteMyTodo(id: number) {
    this.store.dispatch(deleteTodo({ id: id }));
  }
  toggleMyTodo(id: number) {
    this.store.dispatch(toggleTodo({ id: id }));
  }
}
