import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { Todo } from 'types';

export interface InitialState {
  todos: Todo[];
  total: number;
}

const initialState: InitialState = { todos: [], total: 0 };

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, { payload }: PayloadAction<{ todo: Todo }>) => {
      const { todo } = payload;

      state.todos.push(todo);
      state.total += 1;
    },

    removeTodo: (state, { payload }: PayloadAction<{ id: string }>) => {
      const { id } = payload;

      state.todos = state.todos.filter((t) => t.id !== id);
      state.total -= 1;
    },

    toggleTodo: (state, { payload }: PayloadAction<{ id: string }>) => {
      const { id } = payload;

      const todo = state.todos.find((t) => t.id === id);

      if (todo) todo.isCompleted = !todo.isCompleted;
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

export const todosSelector = (state: RootState) => state.todos;
export const totalSelector = (state: RootState) => state.total;

export default todoSlice.reducer;
