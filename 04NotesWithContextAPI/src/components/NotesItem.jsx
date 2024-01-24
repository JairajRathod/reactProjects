import React, { useState } from 'react'
import useNote from '../context/NotesContext'

function NotesItem({note}) {

    const {deleteNote, editNote, updateNote} = useNote();
    const [textareaText, setTextareaText] = useState(note.text);


  return (
    // This is notes structure
    <div 
    key={note.id}
    className='py-3 px-3 w-96 text-black text-xl rounded-xl flex flex-col items-end bg-gray-400 dark:bg-gray-800'>
        
        {/* // this is textarea where our notes are present */}
        <textarea 
        name="notesTextare" 
        cols="30" 
        rows="50" 
        value={textareaText}
        disabled={!note.editable}
        onChange={(event) => setTextareaText(event.target.value)} 
        className='outline-none rounded-xl w-full px-2 py-1 h-[150px] mb-4 resize-none'
        ></textarea>
        
        {/* // this is a container which containes adit and delete button of our note */}
        <div className='flex gap-3'>
        
            {/* // this is edit button */}
            <button 
            className='bg-green-500 px-5 py-2 w-[100px] rounded-full text-white font-bold text-xl dark:bg-green-700'
            onClick={() => {
                if(note.editable){
                    updateNote(note.id, textareaText);
                    editNote(note.id);
                }else{
                    editNote(note.id);
                }
                
                
            }}
            >
                {
                    note.editable ? 'Save' : 'Edit'
                }
            </button>
        
            {/* // this is delete button. */}
            <button 
            className='bg-red-500 px-3 py-2 w-[100px] rounded-full text-white font-bold text-xl dark:bg-red-700'
            onClick={() => deleteNote(note.id)}
            >
                Delete
            </button>
        
        </div>      
    
    </div>
  )
}

export default NotesItem