import React from 'react'
import useTheme from '../context/context';

function Button() {

    const {themeMode, darkMode, lightMode} = useTheme();

    const handleChange = (event) => {
        const currentThemeMode = event.currentTarget.checked;

        if(currentThemeMode){
            darkMode();
        }
        else{
            lightMode();
        }

    }

  return (
    <div className="form-check form-switch">
        <input 
        className="form-check-input" 
        type="checkbox" 
        id="mySwitch" 
        value="" 
        onChange={handleChange}
        checked={themeMode === 'dark'} />
        <label className="form-check-label text-white" htmlFor="mySwitch">Dark Mode</label>
    </div>
  )
}

export default Button