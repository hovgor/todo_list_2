import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import "../App.css";

function TodoList({ todos, setTodos }) {
  const [value, setValue] = useState({
    title: "",
    date: "",
  });
  const [filtered, setFiltered] = useState([]);
  const handleChange = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newObj = {
      ...value,
      id: uuidv4(),
      completed: false,
    };

    const arr = [...todos, newObj];

    setTodos(arr);
  };
  useEffect(() => {
    let filteredArr = [...todos].filter(
      (item, index, self) =>
        self.findIndex((v) => {
          return v.date === item.date;
        }) === index
    );
    setFiltered(filteredArr);
  }, [filtered]);

  return (
    <>
      <dev className="mt-1 border-b border-gray-300 focus-within:border-indigo-600">
        <h2 className="flex justify-center font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600">
          Todo List
        </h2>
        <form
          className="mt-1 border-gray-300 focus-within:border-indigo-600"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-center">
            <div className="mb-3 xl:w-96">
              <label
                for="exampleFormControlInput1"
                className="form-label inline-block mb-2 text-gray-700"
              >
                New Task
              </label>
              <input
                type="text"
                className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                id="exampleFormControlInput1"
                placeholder="Type here"
                value={value.title}
                onChange={handleChange}
                name="title"
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="datepicker relative form-floating mb-3 xl:w-96">
              <input
                required
                name="date"
                type="date"
                value={value.date}
                onChange={handleChange}
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Select a date"
              />
            </div>
          </div>
          <div className="flex space-x-2 justify-center">
            <button
              type="submit"
              className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Add
            </button>
          </div>
        </form>
        <div className="todos">
          <h4 className="flex justify-center font-medium leading-tight text-2xl mt-10 mb-2 text-blue-500">
            Dates
          </h4>
          {filtered.map((todo) => {
            return (
              <div key={todo.id}>
                <Todo {...todo} todos={todos} id={todo.id} date={todo.date} />
              </div>
            );
          })}
        </div>
      </dev>
    </>
  );
}

export default TodoList;
