import LoginPage from "./pages/LoginPage";
import TodoPage from "./pages/TodoPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";

function App() {

  return (

    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/SignUP" element={<SignUpPage />}/>
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </Router>

  )
}

export default App;
