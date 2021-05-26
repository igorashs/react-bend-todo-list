import { useRef } from 'react';
import styled from 'styled-components';
import { useTodos } from 'todo-context';

const StyledForm = styled.form`
  display: flex;
`;

const StyledInput = styled.input`
  width: 100%;
  border: 0;
  box-shadow: none;
  padding: 1rem;
  padding-left: 4rem;

  ::placeholder {
    color: #999;
    font-style: italic;
  }

  color: #444;
  font-size: 1.5rem;
  box-shadow: 0px 0px 3px 0px #33333373;
`;

const TodoForm = () => {
  const { dispatch } = useTodos();
  const inputEl = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputEl.current || !inputEl.current.value) return;

    dispatch({
      type: 'add-todo',
      todo: {
        id: new Date().getTime().toString(),
        isCompleted: false,
        value: inputEl.current.value,
      },
    });

    inputEl.current.value = '';
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        ref={inputEl}
        type="text"
        placeholder="What needs do be done?"
      />
    </StyledForm>
  );
};

export default TodoForm;
