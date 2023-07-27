import './App.css';
import Header from "./MyComponents/Header";
import  Todos  from "./MyComponents/Todos";
import  Footer  from "./MyComponents/Footer";
import  About  from "./MyComponents/About";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  
//  const onEdit =(sno,title,desc)=>{
//   console.log("nothing to do ", sno,title,desc);
//  }
 


  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);
    // Deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    // console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }


  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const myStyle = {
    backgroundColor:'black',
    color :'#972fff'
  }

  return ( 
    <> 

    <div style={myStyle}>
    <Router>
      <Header title="My Todos List" searchBar={false} /> 
      <Switch>
          <Route exact path="/" >
            <>
          
            <Todos todos={todos} onDelete={onDelete} setTodos={setTodos}/> 
            </>
          
          </Route>
          <Route exact strict path="/about" component={About}>
            <About />
          </Route> 
        </Switch> 
      <Footer />
    </Router>
    </div>
    </>
  );
}

export default App;


