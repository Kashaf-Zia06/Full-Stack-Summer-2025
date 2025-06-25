import React, { useContext } from 'react'
import { createContext } from 'react'
import { UserContext } from '../App'

import "./childc.css"

const ChildC = () => {

    const { theme, setTheme } = useContext(UserContext);

    const handleClick = () => {
        if (theme === 'light')
            setTheme('dark')
        if (theme === 'dark')
            setTheme('light')

    }

    return (
        <div>
            <button id="btn" onClick={handleClick
            }>Change Theme</button>
        </div>
    )

}

export default ChildC
