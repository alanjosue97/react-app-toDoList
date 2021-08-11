import "./App.css";
import Form from "./componets/form";
import TodoList from "./componets/toDolist";
import { useState, useEffect } from "react";


function App() {
  const [inputTexts, setInputTexts] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilterTodos] = useState([]);

  //run once when the app start
  useEffect(() => {
    getLocalTodos();
  }, [])

  //useEffect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  },[todos, status]);

  //function
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilterTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilterTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };
  //save to local
  const saveLocalTodos = () => {
     localStorage.setItem('todos', JSON.stringify(todos));
    
  }
const getLocalTodos = () => {
  if(localStorage.getItem('todos') === null){
    localStorage.setItem('todos', JSON.stringify([]));
  }else {
  let todoLocal = JSON.parse(localStorage.getItem("todos"));
    setTodos(todoLocal)
}
}

  return (
    <div className="App">
      <header>
        <h1>APP ToDo List</h1>
      </header>
      <Form
        inputText={inputTexts}
        todos={todos}
        setTodos={setTodos}
        setInputTexts={setInputTexts}
        setStatus={setStatus}
      />
      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
}

export default App;
