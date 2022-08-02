import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
function Todo(props) {
  const { date, todos, id } = props;
  const filtered = todos.filter((el) => el.date === date);

  return (
    <>
      <div className="flex justify-center items-center" id={id}>
        <Link to={`/todos/${date}`}>
          <div className="flex justify-center ">
            <ul className="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
              <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 bg-transparent text-blue-400 ml-20 font-medium text-md leading-tight uppercase rounded hover:bg-gray-100 focus:text-blue-700 focus:bg-gray-100 focus:outline-none focus:ring-50 active:bg-gray-200 active:text-blue-800 transition duration-300 ease-in-out"
                >
                  {date}
                </button>
        {" (" + filtered.length + ")"}
              </li>
            </ul>
          </div>
        </Link>

      </div>
    </>
  );
}

export default Todo;
