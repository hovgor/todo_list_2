import React from 'react'
import { Link } from 'react-router-dom'

function Todo(props) {
  const {date, todos} = props;
  const filtered = todos.filter(el => el.date === date)

  return (
    <div className='app'>
     <Link to={`/todos/${date}`}>{date}
     </Link> 
     {' --- '+filtered.length}
    </div>
  )
}

export default Todo;