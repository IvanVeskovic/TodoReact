import React, {useState} from 'react';

import './form.css';

const Form = ({inputText, setInputText, todos, setTodos}) => {
    const [id, setId] = useState(0);

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitHandler = e => {
        e.preventDefault();

        if(inputText.trim() !== ''){
            setTodos([...todos, {text: inputText, id: id, completed: false}]);
            setInputText('');
            setId(id + 1);
        }
    }

    return (
        <form className='form' onSubmit={submitHandler}>
            <input 
            type="text"
            placeholder="Add Todo"
            className='input-text'
            onChange={inputTextHandler}
            value={inputText}
            />
            <button 
            type='submit' 
            className='btn'>
                <i class="fas fa-plus"></i>
            </button>
        </form>
    )
}

export default Form;