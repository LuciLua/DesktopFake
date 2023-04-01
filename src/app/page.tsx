'use client'

import { useContext } from "react"
import Window from "../components/Window/Window"
import { WindowContext } from "../contexts/WindowContext"

export default function Desktop() {

    const { app, openWindow, maximizeWindow } = useContext(WindowContext)

    return (
        <>
            {openWindow ? <Window size={maximizeWindow} open={app} /> : null}
        </>
    )
}

