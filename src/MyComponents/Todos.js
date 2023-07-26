// export default Todos;
import React, { useState} from 'react';
import { TodoItem } from './TodoItem';

const Todos = ({ todos,setTodos, onDelete }) => {
  // State to keep track of the TodoItem being edited
  const [editedTodo, setEditedTodo] = useState(null);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');


  // Function to handle editing
  const handleEdit = (todo) => {
    setEditedTodo(todo);
    setTitle(todo.title);
    setDesc(todo.desc);
    // Scroll to the top of the page when "Edit" button is clicked
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Function to handle form submission when adding or editing
  const handleSubmit = (e) => { 
    e.preventDefault();
    if (!title || !desc) {
      alert('Title or Description cannot be blank');
    } else {
      if (editedTodo) {
        // Update the TodoItem in the Todos list
        const updatedTodos = todos.map( (todo) => (todo === editedTodo ? { title, desc } : todo));
        setTodos(updatedTodos);
        setEditedTodo(null);
      } else {
        // Add the new TodoItem to the Todos list
        const sno = todos.length === 0 ? 0 : todos[todos.length - 1].sno + 1;
        const newTodo = { sno, title, desc };
        setTodos([...todos, newTodo]);
      }
    //   // Clear the form fields after submission
    //   setTitle('');
    //   setDesc('');
    }
  };

  // Function to handle canceling the edit
  const handleCancelEdit = () => {
    setEditedTodo(null);
    setTitle('');
    setDesc('');
  };

  // ... Rest of your code ...

  return (
    <>
       <div className="container">

   

      {/* Display the form for adding or editing */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
          <h5>{editedTodo ? 'Edit Todo Title' : 'Todo Title'}</h5>
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            <h5>{editedTodo ? 'Edit Todo Description' : 'Todo Description'}</h5>
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="form-control"
            id="desc"
          />
        </div>
        {editedTodo ? (
          <>
            <button type="submit" className="btn btn-sm my-3 btn-success">
              Save Changes
            </button>
            <button type="button" className="btn btn-sm my-3 btn-secondary mx-2" onClick={handleCancelEdit}>
              Cancel
            </button>
          </>
        ) : (
          <button type="submit" className="btn btn-sm my-3 btn-success">
            Add Todo
          </button>
        )}
      </form>

      {/* ... Rest of your code ... */}
       {/* Display the TodoItems and pass the handleEdit function */}
      {todos.map((todo) => (
        <TodoItem todo={todo} onDelete={onDelete} onEdit={handleEdit} />
      ))}
      </div> 
    </>
  );
};

export default Todos;
