import { useContext } from "react"
import { WindowContext } from "../../contexts/WindowContext"
import styles from "./Window.module.scss"

function Window({ children }) {

    const { openWindow, setOpenWindow } = useContext(WindowContext)

    return (
        <div className={styles.c_window}>
            <header className={styles.window_tab}>
                <ul className={styles.tab_icons}>
                    <li
                        className={styles.tab_icon}
                        onClick={() => setOpenWindow(false)} />
                    <li
                        className={styles.tab_icon}
                        onClick={() => setOpenWindow(false)} />
                    <li
                        className={styles.tab_icon}
                        onClick={() => setOpenWindow(false)} />
                </ul>
            </header>
            {children}
        </div>
    )
}

export default Window