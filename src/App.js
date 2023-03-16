import { useEffect, useState } from "react";
import Todo from "./components/Todo";
import { getAllTodos } from "./utils/handelApi";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getAllTodos(setTodos);
  }, []);

  return (
    <div className="app">
      <div className="container">
        <h1>My Todo App</h1>
        <div className="top">
          <input type="text" placeholder="Add Todos..." />
          <div className="add">Add</div>
        </div>
        <div className="list">
          {
            todos.map((todo,index) => (<Todo key={index} todo={todo} />))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
