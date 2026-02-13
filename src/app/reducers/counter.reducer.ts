import { createReducer, on } from "@ngrx/store";
import { increment, decrement, reset } from "../actions/counter.actions";

let initialCount = 0;
export const countReducer = createReducer(
  initialCount,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
)
