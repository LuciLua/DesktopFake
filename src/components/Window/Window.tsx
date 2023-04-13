import { useContext, useEffect, useRef } from "react"
import { WindowContext } from "../../contexts/WindowContext"
// import styles from "./Window.module.css"

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
        <div className="w-[600px] h-[400px] rounded-[10px] bg-[#000000cb] text-[#fff] flex justify-center items-center relative overflow-hidden top-0 backdrop-blur-[15px]" ref={c_window}>
            <header className="absolute top-0 bg-[rgba(22,24,28,0.848)] h-[30px] w-full flex justify-center items-center z-[40]">
                <ul className="flex mr-auto ml-[20px] gap-[8px] w-full">
                    <li
                        className="list-none h-[12px] w-[12px] rounded-[60%] flex justify-center items-center cursor-pointer transition-[0.2s] bg-[rgb(224,67,67)] hover:brightness-[0.9] hover:scale-[0.98]"
                        onClick={() => setOpenWindow(false)} />
                    <li
                        className="list-none h-[12px] w-[12px] rounded-[60%] flex justify-center items-center cursor-pointer transition-[0.2s] bg-[rgb(255,208,0)] hover:brightness-[0.9] hover:scale-[0.98]"
                        onClick={() => maximizeWindow ? setMaximizeWindow(false) : setMaximizeWindow(true)} />
                    <li
                        className="list-none h-[12px] w-[12px] rounded-[60%] flex justify-center items-center cursor-pointer transition-[0.2s] bg-[rgb(238,238,238)] hover:brightness-[0.9] hover:scale-[0.98]"
                        onClick={() => setMinimalizeWindow(false)} />
                </ul>
            </header>
            {openApp()}
        </div>
    )
}

export default Window