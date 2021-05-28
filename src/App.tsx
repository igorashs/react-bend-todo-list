import { Provider } from 'react-redux';
import Header from 'components/Header';
import TodoList from 'components/TodoList';
import styled from 'styled-components';
import store from 'store';
import TodoForm from './components/TodoForm';

const Container = styled.div`
  max-width: 560px;
  margin: 0 auto;
`;

function App() {
  return (
    <div>
      <Header />
      <Provider store={store}>
        <Container>
          <TodoForm />
          <TodoList />
        </Container>
      </Provider>
    </div>
  );
}

export default App;
