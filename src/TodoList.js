import React from 'react';
import Todo from './components/Todo';

const TodoList = ({todos, setTodos, inputText, setInputText}) => {
    return(
        <div className='todo-list'>
            {
                todos.map(todo => (
                    <Todo text={todo.text} id={todo.id} setTodos={setTodos} todos={todos} todo={todo}  key={todo.id} setInputText={setInputText} />
                ))
            }
        </div>
    )
}

export default TodoList;