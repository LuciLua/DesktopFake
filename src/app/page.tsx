'use client'

import { useContext } from "react"
import Window from "../components/Window/Window"
import { WindowContext } from "../contexts/WindowContext"

export default function Desktop() {

    const { openWindow, setOpenWindow } = useContext(WindowContext)

    return (
        <>
            {openWindow ?
                <Window>
                    Some Content Here
                </Window> : null}
        </>
    )
}

