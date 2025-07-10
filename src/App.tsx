import { useState } from "react";
import "./styles/App.css";

import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [opaqueBackGround, setOpaqueBackGround] = useState(true);

  return (
    <div className={`app ${opaqueBackGround && "opaque"}`}>
    <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    <ToDoList />
    </div>
  )
}

export default App;
