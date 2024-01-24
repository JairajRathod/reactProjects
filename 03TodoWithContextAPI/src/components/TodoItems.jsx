

import React, { useState } from 'react'
import useTodo from '../context/Context'

function TodoItems({todo}) {

  // this all are method which we called from contextAPI by using useTodo method
  const {todoEditable, deleteTodo, checkedTodo, updateTodo} = useTodo();
  
  // this is a state variable which change there state when user edit the todo text
  const [todoText, setTodoText] = useState(todo.text);


  return (
    <div 
      className="flex gap-3 p-3 px-5 mb-2 text-white bg-gray-800 w-fit rounded-full items-baseline" 
      key={todo.id}
    >

      {/* this is the checkbox */}
      <div 
        className={`h-3 w-3 rounded-full ${todo.completed? 'bg-orange-500' : 'bg-white'}`} 
        onClick={() => {
          checkedTodo(todo.id);
          todo.editable = false;   
        }}
      ></div>
      
      {/* this is todo text input field  */}
      <input 
        className={`outline-none min-w-72 ${todo.completed? 'line-through decoration-black' : ""} text-xl bg-transparent`}
        value={todoText}
        readOnly={!todo.editable}
        onChange={event => setTodoText(event.target.value)}
      ></input>
      
      {/* this is the edit button  */}
      <button 
      className="p-2 px-2 hover:bg-gray-900 rounded-full" 
      onClick={() => {
        if(todo.completed) return
        if(todo.editable){
          updateTodo(todo.id, todoText)
          todoEditable(todo.id)
        }else{
          todoEditable(todo.id)
        }
                
      }}
      disabled={todo.completed}
      >
        {todo.completed? '✏️' : todo.editable? '📁' : '✏️'}
      </button>
              
      {/* this is the delete button  */}
      <button 
      className="p-2 px-2 hover:bg-gray-900 rounded-full" 
      onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
      
    </div>
  )
}

export default TodoItems