import React, { useState } from 'react'
import useNote from '../context/NotesContext';

function NotesInput() {

    // here we create a state variable which holds input field text when user input text.
    const [noteInput, setNoteInput] = useState('');

    // here we called addNote method from NotesContext by using useNote method
    const {addNote} = useNote();

    const createNote = (text) => {

        // if noteInput is empty then nothing can happen
        if(!text) return;

        // here we call add method to add note in note list.
        addNote({id: Date.now(), text: text, editable: false});
        
        // here we set noteInput = empty so user can enter another input
        setNoteInput('');
    }

  return (
    <div className='px-4 py-3 rounded-full bg-gray-400 dark:bg-gray-800 flex gap-5'>
        
        <input type="text" name="noteText" placeholder='Input Text Here..' 
        className='py-2 px-4 border outline-none text-black text-xl rounded-full 
        focus:border-[3px] focus:border-orange-400 focus:border-opacity-50 dark:focus:border-orange-600 dark:focus:border-opacity-70'
        value={noteInput}
        onChange={(event) => setNoteInput(event.target.value)}
        />

        <button 
        className='border-none bg-orange-400 dark:bg-orange-700 text-white text-xl px-4 py-2 rounded-full font-bold' 
        onClick={() => createNote(noteInput)}
        disabled={noteInput? false : true}
        >
            Add
        </button>

    </div>
  )
}

export default NotesInput