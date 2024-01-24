import { useContext, createContext } from "react";


export const NotesContext = createContext({
    notes: [{
        id: 1,
        text: "notes",
        editable: false,
    }],
    addNote: (note) => {},
    deleteNote: (id) => {},
    editNote: (id) => {},
    updateNote: (id, note) => {}
})

export const NoteProvider = NotesContext.Provider;

export default function useNote(){
    return useContext(NotesContext);
}

