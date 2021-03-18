import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <h1>React Todo App</h1>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
    </div>
  );
}

export default App;
