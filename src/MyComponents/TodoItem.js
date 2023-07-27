import React from 'react'

export const TodoItem = ({todo, onDelete, onEdit}) => {
    return (
        <>
        <div>
           <h4>{todo.title}</h4>
           <p>{todo.desc}</p>
           <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button> 
           <button className="btn btn-sm btn-danger mx-3" onClick={()=>{onEdit(todo)}}>Edit</button> 
        </div>
        <hr/> 
        </>
    );
};



  
