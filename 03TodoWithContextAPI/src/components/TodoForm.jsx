
import React, { useCallback, useState } from 'react'
import useTodo from '../context/Context'

function TodoForm() {

  // here we create a state variable who holds the input of our input field
  const [todoText, setTodoText] = useState('');

  // here we call addTodo method from contextAPI using useTodo method
  const {addTodo} = useTodo();

  // this is an function which is called when we click on add button
  const createTodo = (text) => {

    // if our input field is empty then do nothing
    if(!text) return

    // if input field is not empty then add then input text and ither property to todo list by passing that value in addTodo method
    addTodo({id: Date.now(), text: text, completed: false, editable: false});

    // there we remove the current content from input field so user can input another input
    setTodoText('');
  }

  return (
    <div className="flex justify-center bg-gray-800 px-5 py-4 rounded-full gap-3 mb-10">
          
          {/* this is an input field where user input there text */}
          <input 
          type="text" 
          name="todoInput" 
          className="text-xl px-4 py-2 rounded-3xl w-80 text-black border outline-none  placeholder:text-gray-700 focus:border-[3px] focus:border-blue-600 focus:border-opacity-80" 
          placeholder="Todo Text Here..." 
          value={todoText}
          onChange={event => setTodoText(event.target.value)}
          />
          
          {/* this is a button which adds the content into todo list  */}
          <button className="py-2 px-4 font-bold text-xl rounded-3xl bg-blue-800" 
          onClick={() => createTodo(todoText)}
          >Add</button>
          
      </div>
  )
}

export default TodoForm