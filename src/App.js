import { useEffect, useState } from "react";
import Todo from "./components/Todo";
import { getAllTodos, addTodo, updateTodo, deleteTodo } from "./utils/handelApi";

function App() {


  const [todos, setTodos] = useState({ todos: [] });
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [todoId, setTodoId] = useState("")


  useEffect(() => {
    getAllTodos(setTodos);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setTodoId(_id)

  }
  return (
    <div className="app">
      <div className="container py-3">
        <h1>My Todo App</h1>
        <div className="top">
          <input type="text" placeholder="Add Todos..." value={text} onChange={(e) => setText(e.target.value)} />
          <div className="add" onClick={isUpdating ?
            () => updateTodo(todoId, text, setTodos, setText, setIsUpdating) :
            () => addTodo(text, setText, setTodos)}>{isUpdating ? "Update" : "Add"}</div>
        </div>
        <div className="list">
          {
            todos.todos.length === 0 ?
            <li className="list-group-item d-flex justify-content-center align-items-center my-3 ">
                <span className=" fw-bold">No Todo found....</span>
            </li> :
          todos.todos.map((todo) =>
            <Todo key={todo._id} text={todo.text} updateMode={() => updateMode(todo._id, todo.text)}
              deleteTodo={() => deleteTodo(todo._id, setTodos)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
