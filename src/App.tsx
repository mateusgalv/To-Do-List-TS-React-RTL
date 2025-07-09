import { useState } from "react";
import "./styles/App.css";

import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="app">
    <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    <ToDoList />
    </div>
  )
}

export default App;
