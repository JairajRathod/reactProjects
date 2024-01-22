import { useDebugValue, useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import Button from './components/Button'
import { ThemeProvider } from './context/context'

function App() {

  const [themeMode, setThemeMode] = useState('light');

  const lightMode = () => {
    setThemeMode('light');
  }

  const darkMode = () => {
    setThemeMode('dark');
  }

  useEffect(() => {
    document.querySelector('html').setAttribute('data-bs-theme', "");
    document.querySelector('html').setAttribute('data-bs-theme', themeMode);
  },[themeMode])


  return (
    <ThemeProvider value={{themeMode, lightMode, darkMode}}>
    <div className='text-white d-flex flex-column gap-5 justify-content-center align-items-center vh-100'>
      <Button />
      <Card />
    </div>
    </ThemeProvider>
  )
}

export default App
