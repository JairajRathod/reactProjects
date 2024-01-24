import { useEffect, useState } from "react"
import { TodoProvider } from "./context/Context";
import TodoForm from "./components/TodoForm";
import TodoItems from "./components/TodoItems";



export default function App() {

  // this is the initial todo list 
  const [todos, setTodos] = useState([]);
  
  // this is add function which adds todo in todo list 
  const addTodo = (todo) => {
    setTodos(previous => [{...todo}, ...previous]);
  }

  // this is a checkedTodo method which change complete property of todo item
  const checkedTodo = (id) => {
    setTodos((previous) => 
      previous.map((item) => item.id === id? {...item, completed: !item.completed}: item)
    );
  }

  // this method change todos editable property
  const todoEditable = (id) => {
    setTodos((previous) =>
        previous.map((item) => item.id === id? {...item, editable: !item.editable} : item 
      )
    )
  }

  // this method delete todo from todo list
  const deleteTodo = (id) => {
    setTodos((previous) => previous.filter((item) => item.id !== id))
    
  }

  // this method updates the todo content
  const updateTodo = (id, cText) => {
    setTodos((previous) => previous.map((item) => item.id === id ? {...item, text: cText} : item ))
  }

  // this hook every tim eon initial render and get all data from localstorage and insert it into todolist
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos')) ;

    if(todos && todos.length>0){
      setTodos(todos)
    }

  }, [])

  // this hook calls every tim ewhen any change occure on todo and save it to local storage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])



  return (
    <TodoProvider value={{todos, addTodo, deleteTodo, checkedTodo, todoEditable, updateTodo}}>
    <div className="bg-gray-950 flex justify-center p-24 min-h-screen items-center text-white">
      <div className="">

          {/* // input field here */}
          <TodoForm />

        <div className="flex flex-col justify-center">
          {
            // loop on todo items goes here
            todos.map((todo) => 
            <div key={todo.id}>
              <TodoItems todo={todo} />
            </div>)
          }
        </div>
      </div>

    </div>
    </TodoProvider>
  )
}


