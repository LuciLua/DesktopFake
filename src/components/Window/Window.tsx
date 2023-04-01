import { useContext, useEffect, useRef } from "react"
import { WindowContext } from "../../contexts/WindowContext"
import styles from "./Window.module.scss"

import Spotify from "../Apps/Spotify/Spotify"
import PyCharm from "../Apps/PyCharm/PyCharm"
import Terminal from "../Apps/Terminal/Terminal"

function Window({ size, open }) {

    const { openWindow, setOpenWindow } = useContext(WindowContext)
    const { maximizeWindow, setMaximizeWindow } = useContext(WindowContext)
    const { minimalizeWindow, setMinimalizeWindow } = useContext(WindowContext)

    const c_window = useRef(null)

    useEffect(() => {

        maximizeWindow ? c_window.current.style.width = '100%' : c_window.current.style.width = '600px';
        maximizeWindow ? c_window.current.style.height = '100%' : c_window.current.style.height = '400px';

    }, [maximizeWindow])

    const openApp = () => {
        switch (open) {
            case 'spotify':
                return <Spotify />
            case 'pycharm':
                return <PyCharm />
            case 'terminal':
                return <Terminal />
            default:
                return
        }
    }

    return (
        <div className={styles.c_window} ref={c_window}>
            <header className={styles.window_tab}>
                <ul className={styles.tab_icons}>
                    <li
                        className={styles.tab_icon}
                        onClick={() => setOpenWindow(false)} />
                    <li
                        className={styles.tab_icon}
                        onClick={() => maximizeWindow ? setMaximizeWindow(false) : setMaximizeWindow(true)} />
                    <li
                        className={styles.tab_icon}
                        onClick={() => setMinimalizeWindow(false)} />
                </ul>
            </header>
            {openApp()}
        </div>
    )
}

export default Window