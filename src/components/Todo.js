import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
function Todo(props) {
  const {date, todos, id} = props;
  const filtered = todos.filter(el => el.date === date)
  
  return (
    <>
    <div className='app' id={id}>
     <Link to={`/todos/${date}`}>{date}
     </Link> 
     {' ('+filtered.length +')'}
    </div>
    </>
  )
}

export default Todo;