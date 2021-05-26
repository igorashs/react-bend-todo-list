import { TodosProvider } from 'todo-context';
import Header from 'components/Header';
import TodoList from 'components/TodoList';
import styled from 'styled-components';
import TodoForm from './components/TodoForm';

const Container = styled.div`
  max-width: 560px;
  margin: 0 auto;
`;

function App() {
  return (
    <div>
      <Header />
      <TodosProvider>
        <Container>
          <TodoForm />
          <TodoList />
        </Container>
      </TodosProvider>
    </div>
  );
}

export default App;
