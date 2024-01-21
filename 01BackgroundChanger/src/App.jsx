import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('dark');


  return (
    <>
    <div className='body' style={{backgroundColor: color}}>
      <div className='container'>
        <button className="colorButton buttonColorRed" onClick={() => {setColor('red')}}>Red</button>
        <button className="colorButton buttonColorBlue" onClick={() => {setColor('blue')}}>Blue</button>
        <button className="colorButton buttonColorGreen" onClick={() => {setColor('green')}}>Green</button>
        <button className="colorButton buttonColorYellow" onClick={() => {setColor('yellow')}}>Yellow</button>
        <button className="colorButton buttonColorPink" onClick={() => {setColor('pink')}}>Pink</button>
      </div>
    </div>
      
    </>
  )
}

export default App
