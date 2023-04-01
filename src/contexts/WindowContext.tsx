'use client'

import { createContext, useState } from "react"

export const WindowContext = createContext(null)

function WindowContextProvider({ children }) {

    const [openWindow, setOpenWindow] = useState(false)
    const [maximizeWindow, setMaximizeWindow] = useState(false)
    const [minimalizeWindow, setMinimalizeWindow] = useState(false)
    
    const [app, setApp] = useState('')

    return (
        <WindowContext.Provider value=
            {
                {
                    app,
                    setApp,
                    openWindow,
                    setOpenWindow,
                    maximizeWindow,
                    setMaximizeWindow,
                    minimalizeWindow,
                    setMinimalizeWindow
                }
            }>
            {children}
        </WindowContext.Provider>
    )
}

export default WindowContextProvider