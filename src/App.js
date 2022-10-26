import logo from './logo.svg';
import './App.css';
import AddTodo from './Component/AddTodo';
import TodoList from './Component/TodoList';

function App() {
  return (
    <>
    <h3>Todo App</h3>
    <AddTodo />
    <TodoList/>
    </>
  );
}

export default App;
