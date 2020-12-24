import React from 'react'

function Todo({text,eachtodo,todos, setTodos}) {

// Events
const deleteHandler = () =>{
  setTodos(todos.filter((el) => el.id !== eachtodo.id));
  // ami jokhon del buttone click korbo, tokhon filter fnction check korbe ami kon specific iteme click korechi. Tokon se atake del kore dibe.
}

const completeHandler = () =>{
  setTodos(todos.map((item) => {
     if(item.id === eachtodo.id){
      return{
       ...item,//array spread operator ...
       completed: !item.completed
      }
     }

     return item;
  }))
}

 return (
   <div className="todo">
   <li 
     className={`todo-item ${eachtodo.completed ? "completed" : ""}`}>{text}
   </li>

    <button onClick={completeHandler} className="complete-btn"> 
      <i className="fas fa-check"> ✔ </i> 
    </button>
    <button onClick={deleteHandler} className="trash-btn">
      <i className="fas fa-trash">❌</i>
    </button>
   </div>
 );
}

export default Todo
