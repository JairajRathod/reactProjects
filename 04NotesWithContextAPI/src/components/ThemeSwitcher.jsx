import React from 'react'
import useTheme from '../context/ThemeContext'

function ThemeSwitcher() {

    const {themeMode, darkMode, lightMode} = useTheme();

  return (
    <div className='flex justify-end px-20 py-3'>
            
        <button 
        className={`border px-4 py-2 rounded-full text-xl font-bold border-black text-black dark:bg-gray-800 dark:text-white dark:border-white`}
        onClick={() => {
            themeMode === 'dark' ? lightMode() : darkMode ();
        }}
        >
            {
                themeMode === 'dark' ? 'light' : 'dark' 
            }
        </button>
          
    </div>
  )
}

export default ThemeSwitcher