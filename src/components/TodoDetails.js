import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
function TodoDetails(props) {
  const { todos, setTodos } = props;
  const [toggle, setToggle] = useState(false);
  const [editText, setEditText] = useState("");
  const [editId, setEditId] = useState(null);

  const { date } = useParams();
  const filtered = todos.filter((item) => item.date === date);

  const submitDelete = (id) => {
    const newTodo = todos.filter((el) => el.id !== id);
    setTodos(newTodo);
  };

  const handleComplete = (id) => {
    setTodos(
      todos.map((itm) => {
        if (itm.id === id) {
          return {
            ...itm,
            completed: !itm.completed,
          };
        }
        return itm;
      })
    );
  };

  const submitEdit = (id) => {
    const newTodos = [...todos].map((el) => {
      if (el.id === id) {
        el = {
          ...el,
          title: editText,
        };
      }
      return el;
    });
    setTodos(newTodos);
    setToggle(!toggle);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <h3 className="font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600">
        {date}
      </h3>
      {filtered.map((item) => {
        return (
          <div className="link-block">
            {toggle && item.id === editId ? (
              <div className="actions">
                <form onSubmit={() => submitEdit(item.id)}>
                  <div className="flex justify-center">
                    <div className="mb-3 xl:w-96">
                      <label
                        for="exampleText0"
                        className="form-label inline-block mb-2 text-gray-700"
                      >
                        Update Task
                      </label>
                      <input
                        onChange={(e) => setEditText(e.target.value)}
                        value={editText}
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
                        id="exampleText0"
                        placeholder="Text input"
                      />
                    </div>
                  </div>

                  <div className="flex space-x-2 justify-center">
                    <div>
                      <button
                        type="submit"
                        className="inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => {
                          setEditText("");
                          setToggle(false);
                          setEditId(null);
                        }}
                        type="button"
                        className="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            ) : (
              <div className="flex">
                <div className="flex flex-col">
                  <div className="flex justify-between items-center">
                    <h2
                      style={{
                        textDecoration: `${
                          item.completed ? "line-through" : "none"
                        }`,
                      }}
                      key={item.id}
                      className="flex justify-center font-medium leading-tight text-3xl"
                    >
                      {item.title}
                    </h2>

                    <input
                      type="checkbox"
                      className=""
                      onChange={() => handleComplete(item.id)}
                    />
                  </div>
                  <div className="flex space-x-2 justify-end gap-2 mt-4">
                    <button
                      onClick={() => submitDelete(item.id)}
                      type="button"
                      className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => {
                        setToggle(true);
                        setEditId(item.id);
                        setEditText(item.title);
                      }}
                      type="button"
                      className="inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default TodoDetails;
