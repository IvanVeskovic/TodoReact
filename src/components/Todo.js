import React from 'react';

import './todo.css';

const Todo = ({text, id, todos, setTodos, todo, setInputText}) => {

    const deleteHandler = (e) => {
        setTodos(todos.filter(el => el.id !== id));
    }

    const changeHandler = (e) => {
        setInputText(todo.text);
        deleteHandler();
    }

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return {
                    // ...item, completed: !item.completed
                    text: item.text,
                    id: item.id,
                    completed: !item.completed
                }
            }
            return item;
        }))
    }

    return(
        <div className={`todo ${todo.completed ? 'completed' : ''}`}>
            <div className='todo-text'>
                {text}
            </div>
            <span className='todo-done' onClick={completeHandler}>
                <i class="fas fa-check"></i>
            </span>
            <span className='todo-change' onClick={changeHandler}>
                <i class="fas fa-pen"></i>
            </span>
            <span className='todo-delete' onClick={deleteHandler}>
                <i class="fas fa-times"></i>
            </span>
        </div>
    )
}

export default Todo;