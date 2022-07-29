import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';

function TodoList({todos,setTodos}) {
  const [value, setValue] = useState({
    title: '',
    date: ''
  })
  const [filtered,setFiltered] = useState([])
  useEffect(() => {
    setFiltered(todos)
  },[filtered])
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
 
     let filteredArr = arr.filter((item,index,self) => self.findIndex(v => {return v.date === item.date}) === index);

     setTodos(arr);

    return setFiltered(filteredArr);
  }

  return (
    <>
     <dev className="App">
        <h1>Todo List</h1>
          <form onSubmit={handleSubmit}>
            <input required placeholder='title' name='title' type="text"  value={value.title} onChange={handleChange} />
            <input required name='date' type="date"  value={value.date} onChange={handleChange} />
            <button type='submit'>submit</button>
          </form>
          <div className='App'>
            {filtered.map(todo => {
              
              return (
                <div key={todo.id}>
                  <Todo {...todo} todos={todos}  />
                </div>
              )
            })}
          </div>
     </dev>
    </>
  )
}

export default TodoList;












