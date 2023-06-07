import React, { useState } from 'react';
import '../App.css';
import TodoList from './TodoList';
function Todo(props) {
  const [inputText, setInputText] = useState('');
  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      props.addList(inputText)
      setInputText('')
    }
  }
  return (
    <div className="input-outer">
      <input type='text' value={inputText} className='input-box' placeholder="Enter Your Todo" onChange={e => { setInputText(e.target.value) }} onKeyDown={handleEnterPress}></input>
      <button className="btn-type" onClick={() => {
        props.addList(inputText)
        setInputText('')
      }}>+</button>

    </div>
  )
}

export default Todo;