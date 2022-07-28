import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import TodoDetails from './components/TodoDetails';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos()
    },[])
  
  
    useEffect(() => {
    saveTodos()
    },[todos])
  
  
    const saveTodos = () => {
         localStorage.setItem('todos',JSON.stringify(todos));
    }
    const getTodos = () => {
    if(localStorage.getItem('todos') === null){
         localStorage.setItem('todos',JSON.stringify([]));
    } else {
         let localTodos = JSON.parse(localStorage.getItem('todos'));
         setTodos(localTodos);
    }
    }
  

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
