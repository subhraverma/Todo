import { useState } from 'react';
import './App.css';
import Todo from './Component/Todo';
import TodoList from './Component/TodoList';
function App() {
    const [listTodo,setListTodo]=useState([]);
    let addList=(inputText)=>{
        if(inputText!=='')
        setListTodo([...listTodo,inputText]);
    }
    const deleteList=(key)=>{
        let newList=[...listTodo];
        newList.splice(key,1)
        setListTodo([...newList])
    }
  return (
    <div className="App">
     <Todo addList={addList} />
     <h1 style={{marginLeft:'50px',color:'maroon'}}>Todo</h1>
    <hr style={{ height:'5px' ,background:'maroon'}}/>
    {listTodo.map((listItem,i)=>{
        return(
            <TodoList key={i} item={listItem} index={i} deleteItem={deleteList}/>
        )
    })}
    </div>
  );
}

export default App;
