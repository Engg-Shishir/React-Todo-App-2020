import React from "react";


const Form = (props) => {
  // Here I can write Javascript code

  const iputTextHandler = (e) => {
    //console.log(e);
    props.setInputText(e.target.value);
  };

  function submitTodoHandler(e){
    e.preventDefault();
    props.setTodos([
      ...props.todos,//array spread operator ...
      {text: props.inputText, completed: false, id: Math.random() * 1000}
    ]);
    props.setInputText("");
  }

  const statusHandler = (e) => {
    props.setStatus(e.target.value);
  }
  
  return(
    <form>
      <input 
        value={props.inputText} 
        onChange={iputTextHandler} 
        type="text" 
        className="todo-input" 
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square">➕</i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncomplete</option>
        </select>
      </div>
    </form>
  );
}


export default Form;