import "./styles/App.css";

import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="app">
    <Header />
    <ToDoList />
    </div>
  )
}

export default App
