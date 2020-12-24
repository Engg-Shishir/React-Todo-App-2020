import React from 'react';
// Importing Component
import Todo from './Todo';


function TodoList( { todos,setTodos,filteredTodos }) {
 return ( 
  <div className="todo-container">
    <ul className="todo-list">
     {
       filteredTodos.map(eachtodo => (
         <Todo 
           todos={todos} 
           setTodos={setTodos} 
           eachtodo={eachtodo}
           text={eachtodo.text} 
           key={eachtodo.id} 
        />
       ))
     }
    </ul>
  </div>
 );
}

export default TodoList;
