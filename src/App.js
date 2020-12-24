import React,{useState,useEffect} from 'react';
import './App.css';

// Importing Component
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {
  // State part
  //inputText is our data & setInputText is afunction who is updata our inputText data
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);



  //Run only once when the app start
  useEffect(() => {
    getLocalTodos();
  }, [])


  //UseEffect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();//Save lacel storage again when state change
  }, [todos, status]);


   //Event part
   // Flter Todos list
   const filterHandler = () => {
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter(eachtodo => eachtodo.completed === true))
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(eachtodo => eachtodo.completed === false))
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //save to local storage
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  //Get soredTodos from local storage
  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      
      setTodos(todoLocal);
    }
   };




  return (
    <div className="App">
    <header>
      <h1>Ed's Todo List </h1>
    </header>
    <Form 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        setStatus={setStatus}
    />
    <TodoList  
         filteredTodos={filteredTodos} 
         todos={todos} 
         setTodos={setTodos} 
    />
    </div>
  );
}

export default App;
