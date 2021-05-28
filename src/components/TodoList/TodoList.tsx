import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { todosSelector, totalSelector } from 'todoSlice';
import TodoItem from './TodoItem';

const TotalItems = styled.p`
  color: #8d8d8d;
  padding: 0.5rem 1rem;

  background-color: #fff;
  box-shadow: 0px 0px 3px 0px #33333373, 0px 7px 0px -3px #fff,
    0px 7px 3px -3px #33333373, 0px 14px 0px -7px #fff,
    0px 14px 3px -7px #33333373;
`;

const TodoList = () => {
  const todos = useSelector(todosSelector);
  const total = useSelector(totalSelector);

  if (todos)
    return (
      <>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <TodoItem todo={todo} />
            </li>
          ))}
        </ul>

        {!!total && (
          <TotalItems>
            {total} {total > 1 ? 'items' : 'item'} left
          </TotalItems>
        )}
      </>
    );

  return null;
};

export default TodoList;
