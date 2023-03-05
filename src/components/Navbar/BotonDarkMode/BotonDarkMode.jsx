import React from 'react';
import './BotonDarkMode.css';

//context
import { useDarkModeContext } from "../../../Context/DarkModeContext";

export const BotonDarkMode = () => {
    const{toggleDarkMode} = useDarkModeContext()

    return (
        <div>
        <label className="switch">
            <input type="checkbox" onInput={() => toggleDarkMode()}/>
            <span className="slider round" />
        </label>

        </div>
    );
}

export default BotonDarkMode;
