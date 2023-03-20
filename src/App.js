import LoginPage from "./pages/LoginPage";
import TodoPage from "./pages/TodoPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (

    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </Router>

  )
}

export default App;
