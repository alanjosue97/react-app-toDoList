import React from "react";

//component Form
const Form = ({ setInputTexts, todos, setTodos, inputText }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    //  props.setInputTexts
    setInputTexts(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, complete: false, id: Math.random() * 1000 },
    ]);
    setInputTexts("");
    console.log({ todos });
  };

  return (
    <div>
      <form>
        <input
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
        />
        <button
          onClick={submitTodoHandler}
          className="todo-button"
          type="submit"
        >
          <i className="fas fa-puls-square">+</i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
