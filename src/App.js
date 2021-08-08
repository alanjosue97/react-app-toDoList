import "./App.css";
import Form from "./componets/form";
import TodoList from "./componets/toDolist";
import { useState } from "react";

function App() {
  const [inputTexts, setInputTexts] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>App ToDo List</h1>
      </header>
      <Form
        inputText={inputTexts}
        todos={todos}
        setTodos={setTodos}
        setInputTexts={setInputTexts}
      />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
