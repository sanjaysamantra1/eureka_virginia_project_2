import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../../actions/counter.actions';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  imports: [CommonModule]
})
export class CounterComponent {
  count$: Observable<number>;
  constructor(private store: Store) {
    this.count$ = this.store.select((stateObj: any) => stateObj['countReducer']); // selector
  }

  incrementCount() {
    const actionObj = increment();
    this.store.dispatch(actionObj);
  }
  decrementCount() {
    const actionObj = decrement();
    this.store.dispatch(actionObj);
  }
  resetCount() {
    this.store.dispatch(reset());
  }
}
