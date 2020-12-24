import React from "react";


const Form = (props) => {
  // Here I can write Javascript code

  const iputTextHandler = (e) => {
    //console.log(e);
    props.setInputText(e.target.value);
  };
  
  return(
    <form>
      <input 
        value=""  
        onChange={iputTextHandler}
        type="text" 
        className="todo-input" 
      />
      <button  className="todo-button" type="submit">
        <i className="fas fa-plus-square">➕</i>
      </button>
      <div className="select">
        <select  name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncomplete</option>
        </select>
      </div>
    </form>
  );
}


export default Form;