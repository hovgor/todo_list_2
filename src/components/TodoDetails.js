 import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

function TodoDetails(props) {
    const {todos, setTodos} = props;
    const [toggle, setToggle] = useState(false);
    const [editText, setEditText] = useState('');
    const [editId,setEditId] = useState(null)
    
    const {date} = useParams()
    const filtered = todos.filter(item => item.date === date)
  
    const submitDelete = (id) =>{
      const newTodo = todos.filter(el => el.id !== id);
      setTodos(newTodo);
    }

    const handleComplete = (id) => {
      setTodos(todos.map(itm => {
          if(itm.id === id){
              return {
                  ...itm,
                  completed: !itm.completed
              }
          }
          return itm;
      }))
  }
  


    const submitEdit = (id) =>{
      const newTodos = [...todos].map(el => {
        if(el.id === id){
          el = {
            ...el,
            title:editText
          }
        }
        return el;
      })
      setTodos(newTodos);
      setToggle(!toggle);
    }

    return (
    <div className=''>
    {filtered.map(item => {
      return(
        <div className='link-block'>
        {toggle && item.id === editId ? (
          <div className='actions'>
          <form onSubmit={() => submitEdit(item.id)} >
          <input type='text' onChange={(e) => setEditText(e.target.value)} value={editText}/>
          <button type='submit'>save</button>
          <button onClick={() => {
            setEditText('')
            setToggle(false)
            setEditId(null)
          }}>cancel</button>
          </form>
        </div>
        ) : (<div className=''>
                <div className=''>
                  <h1 style={{textDecoration: `${item.completed ? "line-through": "none" }`}} key={item.id}>{item.title}</h1>
                  <input type='checkbox' className='' onChange={() => handleComplete(item.id)} />
                  <button className='' onClick={()=> submitDelete(item.id)}>delete</button>
                  <button className='' onClick={() => {
                      setToggle(true)
                      setEditId(item.id)
                      setEditText(item.title)
                  } }>edit</button>
                </div>
            </div>
        )}
       
        </div>
      )
    })}
      <div className='date-link-block'>
        {date}
      </div>
    </div>
  )
}

export default TodoDetails;