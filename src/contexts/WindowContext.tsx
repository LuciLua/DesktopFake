'use client'

import { createContext, useState } from "react"

export const WindowContext = createContext(null)

function WindowContextProvider({ children }) {

    const [openWindow, setOpenWindow] = useState(false)

    return (
        <WindowContext.Provider value=
            {
                {
                    openWindow,
                    setOpenWindow
                }
            }>
            {children}
        </WindowContext.Provider>
    )
}

export default WindowContextProvider