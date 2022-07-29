import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import TodoDetails from './components/TodoDetails';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
    
  useEffect(() => {
    let localTodos = localStorage.getItem('todos')
    if(localTodos && localTodos.length > 0 ){
      setTodos(JSON.parse(localTodos))
    }
  },[])
    
useEffect(()=>{
  if(todos && todos.length !== 0){
    localStorage.setItem('todos', JSON.stringify(todos) )  
  }
}, [todos])
 
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<TodoList todos={todos} setTodos={setTodos} />} />
          <Route path="/todos/:date" element={<TodoDetails todos={todos} setTodos={setTodos} />}/>
        </Routes>  
      </Router>    
    </>
  );
}

export default App;
