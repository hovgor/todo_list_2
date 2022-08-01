import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import '../App.css';

function TodoList({todos,setTodos}) {
  const [value, setValue] = useState({
    title: '',
    date: ''
  })
  const [filtered,setFiltered] = useState([])
  const handleChange = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value
    })
  }  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newObj = {
      ...value,
      id: uuidv4(),
      completed: false
    }
    
    const arr = [...todos, newObj];
    
    
    setTodos(arr);
  }
  useEffect(() => {
    let filteredArr = [...todos].filter((item,index,self) => self.findIndex(v => {return v.date === item.date}) === index);
    setFiltered(filteredArr)
  },[filtered])
  
  return (
    <>
     <dev className="App">
        <h1 className='todoList'>Todo List</h1>
          <form className='formClass' onSubmit={handleSubmit}>
            <p>New Task</p>
            <input className='inputs' required placeholder='Type here' name='title' type="text"  value={value.title} onChange={handleChange} />
            <input className='inputs' required name='date' type="date"  value={value.date} onChange={handleChange} />
            <button type='submit'>Add</button>
          </form>
          <div className='todos'>

          <h3>Datas</h3>
            {filtered.map(todo => {
              
              return (
                <div key={todo.id}>
                  
                  <Todo {...todo} todos={todos} id={todo.id} date={todo.date} />
                </div>
              )
            })}
          </div>
     </dev>
    </>
  )
}

export default TodoList;












