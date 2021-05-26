import { createContext, useContext, useReducer } from 'react';
import { Todo } from 'types';

type State = {
  todos: Todo[];
  total: number;
};
type Action =
  | { type: 'add-todo'; todo: Todo }
  | { type: 'remove-todo'; id: string }
  | { type: 'toggle-todo'; id: string };
type Dispatch = (action: Action) => void;
type TodoProviderProps = { children: React.ReactNode };

const TodosContext =
  createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined);

const todosReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'add-todo': {
      const { todo } = action;

      const todos = state.todos.map((t) => t);
      todos.push(todo);

      return { todos, total: state.total + 1 };
    }

    case 'remove-todo': {
      const { id } = action;

      const todos = state.todos.filter((t) => t.id !== id);

      return { todos, total: state.total - 1 };
    }

    case 'toggle-todo': {
      const { id } = action;

      return {
        ...state,
        todos: state.todos.map((t) =>
          t.id === id ? { ...t, isCompleted: !t.isCompleted } : t,
        ),
      };
    }

    default:
      throw new Error('Unhandled action type');
  }
};

const TodosProvider = ({ children }: TodoProviderProps) => {
  const [state, dispatch] = useReducer(todosReducer, { todos: [], total: 0 });

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
};

const useTodos = () => {
  const context = useContext(TodosContext);

  if (!context) throw new Error('useTodos must be used within a TodosProvider');

  return context;
};

export { TodosProvider, useTodos };
