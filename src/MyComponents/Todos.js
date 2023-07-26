// import React from 'react'
// import {TodoItem} from "./TodoItem";
// const Todos = (props) => {
//     let myStyle = {
//         minHeight: "70vh",
//         margin: "40px auto"
//     }
//     return (
//         <div className="container" style={myStyle}>
//             <h3 className="my-3">Todos List</h3>
//             {props.todos.length===0? "No Todos to display":  
//             props.todos.map((todo)=>{
//                 // console.log(todo.sno);
//                 return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} onEdit={props.onEdit}/>   
//                 )
//             })
//               } 
//         </div>
//     )
// }

// export default Todos;



import React, { useState } from 'react';
import { TodoItem } from './TodoItem';

const Todos = ({ todos, onDelete }) => {
  // State to keep track of the TodoItem being edited
  const [editedTodo, setEditedTodo] = useState(todos);

  // Function to handle editing
  const handleEdit = (todo) => {
    setEditedTodo(todo);
  };

  // Function to handle form submission when editing
  const handleEditSubmit = (e) => {
    e.preventDefault();
    // Update the TodoItem in the Todos list
    // First, remove the editedTodo from the list
    const updatedTodos = todos.filter((todo) => todo !== editedTodo);
    // Then add the modified editedTodo back to the list
    updatedTodos.push(editedTodo);
    setEditedTodo(null); // Reset the editedTodo state
    setTodos(updatedTodos); // Update the Todos list
  };

  // ... Rest of your code ...

  return (
    <>
      {/* Display the TodoItems and pass the handleEdit function */}
      {todos.map((todo) => (
        <TodoItem key={todo.sno} todo={todo} onDelete={onDelete} onEdit={handleEdit} />
      ))}

      {/* Display the form for editing */}
      {editedTodo && (
        <form onSubmit={handleEditSubmit}>
          <div className="mb-3">
            <label htmlFor="editTitle" className="form-label">
              Edit Todo Title
            </label>
            <input
              type="text"
              value={editedTodo.title}
              onChange={(e) => setEditedTodo({ ...editedTodo, title: e.target.value })}
              className="form-control"
              id="editTitle"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="editDesc" className="form-label">
              Edit Todo Description
            </label>
            <input
              type="text"
              value={editedTodo.desc}
              onChange={(e) => setEditedTodo({ ...editedTodo, desc: e.target.value })}
              className="form-control"
              id="editDesc"
            />
          </div>
          <button type="submit" className="btn btn-sm btn-success">
            Save Changes
          </button>
        </form>
      )}

      {/* ... Rest of your code ... */}
    </>
  );
};

export default Todos;
