import { createContext, useContext } from "react";


export const TodoContext = createContext({
    todos: [{
        id: 1,
        text: "text here",
        completed: false,
        editable: false,
    }],
    addTodo: (todo) => {},
    deleteTodo: (id) => {},
    checkedTodo: (id) => {},
    todoEditable: (id) => {},
    updateTodo: (id, text) => {},
})

export const TodoProvider = TodoContext.Provider;

export default function useTodo(){
    return useContext(TodoContext);
}




