import { useEffect, useState } from 'react'
import { NoteProvider } from './context/NotesContext';
import NotesInput from './components/NotesInput';
import NotesItem from './components/NotesItem';
import { NotesThemeContextProvider } from './context/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {

  const [notes, setNotes] = useState([]);
  const [themeMode, setThemeMode] = useState('dark');

  const darkMode = () => {
    setThemeMode('dark');
  }

  const lightMode = () => {
    setThemeMode('light');
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode])


  const addNote = (item) => {
    setNotes(previous => [{...item}, ...previous]);
    console.log('added');
  }

  const deleteNote = (id) => {
    setNotes(previous => previous.filter((item) => {
      if(item.id !== id){
        return item;
      }
    }))
  }

  // this function is
  const editNote = (id) => {
    setNotes(previous => previous.map(
      (item) => item.id === id ? {...item, editable: !item.editable} : item 
    ))
  }

  const updateNote = (id, note) => {
    setNotes(previous => previous.map((item) => item.id === id ? {...item, text: note} : item ))
  }

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes'));

    if(notes && notes.length>0){
      setNotes(notes);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  return (
    <NotesThemeContextProvider value={{themeMode, darkMode, lightMode}}>
      <NoteProvider value={{notes, addNote, deleteNote, updateNote, editNote}}>

        <div className='w-full min-h-screen bg-gray-100 dark:bg-gray-950 dark:text-white'>
          
          <ThemeSwitcher />

        <div className='w-full flex flex-col justify-center items-center  '>
      
          <div className='mb-10'>
            {/* /* // input field comes here */ }
            <NotesInput />
          </div>

          <div className='grid grid-cols-3 gap-3'>

            {/* /* // loop for noteItems comes here */ }
            {
              notes.map((note) => 
              <div key={note.id}>
                <NotesItem note={note} />
              </div>)
            }

          </div>

        </div>

      </div>

    </NoteProvider>

  </NotesThemeContextProvider>
  )
}

export default App
