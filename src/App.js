import { useEffect, useState } from "react";
import Todo from "./components/Todo";
import { getAllTodos, addTodo, updateTodo, deleteTodo } from "./utils/handelApi";

function App() {


  const [todos, setTodos] = useState({ todos: [] });
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [todoId, setTodoId] = useState("")
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    getAllTodos(setTodos);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setTodoId(_id)
  }

  const handleAddTodo = () => {
    if (text.trim() === '') {
      setErrorMessage('Please enter some text for the to-do item ');
      return;
    }
    addTodo(text, setText, setTodos);
    setErrorMessage('')
  }

  return (
    <div className="app">
      <div className="container py-3">
        <h1>My Todo App</h1>
        <div className="top">
          <input className="liveAlertPlaceholder" type="text" placeholder="Add Todos..." value={text} onChange={(e) => setText(e.target.value)} />
          <div className="add" onClick={isUpdating ?
            () => updateTodo(todoId, text, setTodos, setText, setIsUpdating):
            handleAddTodo}>{isUpdating ? "Update" : "Add"}</div>
        </div>
        {errorMessage && <p className="error bg-danger mt-3 p-2 fw-bold rounded text-center d-flex align-items-center justify-content-center">{errorMessage}<i class="bi bi-exclamation-circle-fill ms-2 fs-5"></i></p>}
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
