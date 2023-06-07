import React from 'react'
import "../App.css";
function TodoList(props) {
    return (
        <div className="outer">
                <p className='item'>
                    {props.item}
                <span className='icon'>
                    <i className="fa-solid fa-trash" onClick={e=>{
                        props.deleteItem(props.index)
                    }}></i>
                </span>
                </p>
                

        </div>
    )
}

export default TodoList;