import { useTodos } from 'todo-context';
import { Todo } from 'types';
import styled from 'styled-components';
import { Checkbox, RemoveButton } from './Button/Button';

type TodoItemProps = {
  todo: Todo;
};

type TodoValueProps = {
  completed?: boolean;
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 3rem 2fr 4rem;
  grid-template-rows: 3.75rem;
  align-items: center;
  gap: 1rem;

  background-color: #fff;
  box-shadow: 0px 0px 3px 0px #33333373;

  button:last-child {
    visibility: hidden;
  }

  :hover {
    button:last-child {
      visibility: initial;
    }
  }
`;

const TodoValue = styled.p<TodoValueProps>`
  font-size: 1.5rem;
  color: #444;
  word-break: break-all;

  transition: color 300ms;

  ${({ completed }) =>
    completed && 'text-decoration: line-through; color: #4444446f;'}
`;

const TodoItem = ({ todo }: TodoItemProps) => {
  const { dispatch } = useTodos();

  return (
    <Container>
      <Checkbox
        checked={todo.isCompleted}
        onChange={() => dispatch({ type: 'toggle-todo', id: todo.id })}
      />
      <TodoValue completed={todo.isCompleted}>{todo.value}</TodoValue>
      <RemoveButton
        onClick={() => dispatch({ type: 'remove-todo', id: todo.id })}
      />
    </Container>
  );
};

export default TodoItem;
