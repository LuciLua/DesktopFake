'use client'

import Image from "next/image"
import { useContext, useState } from "react"
import { WindowContext } from "../../contexts/WindowContext"
// import styles from "./Footer.module.css"

function Footer() {

    const { openWindow, setOpenWindow, setApp } = useContext(WindowContext)

    return (
        <div className="w-full h-[80px] flex justify-center relative z-10">
            <div className="py-[10px] px-[15px] w-fit h-[90%] bg-[rgba(0,0,0,0.271)] absolute bottom-0 rounded-t-[10px]">
                <ul className="flex justify-center items-center w-fit h-full gap-[25px] px-[10px] list-none transition-[0.2s]">
                    <li
                        className="w-[35px] h-[35px] relative"
                        onClick={() => {
                            setOpenWindow(true)
                            setApp('spotify')
                        }}>
                        <Image
                            alt="icon_menu"
                            className="w-[35px] h-[35px] object-cover"
                            fill={true}
                            src="/img/spotify.svg" />
                    </li>
                    <li className="w-[35px] h-[35px] relative"
                        onClick={() => {
                            setOpenWindow(true)
                            setApp('pycharm')
                        }}>
                        <Image
                            alt="icon_menu"
                            className="w-[35px] h-[35px] object-cover"
                            fill={true}
                            src="/img/pycharm.svg" />
                    </li>
                    <li className="relative w-[35px] h-[35px]"
                        onClick={() => {
                            setOpenWindow(true)
                            setApp('vscode')
                        }}>
                        <Image
                            alt="icon_menu"
                            className="w-[35px] h-[35px] object-cover"
                            fill={true}
                            src="/img/vscode.svg" />
                    </li>
                    <li className="relative w-[35px] h-[35px]"
                        onClick={() => {
                            setOpenWindow(true)
                            setApp('chrome')
                        }}>
                        <Image
                            alt="icon_menu"
                            className="w-[35px] h-[35px] object-cover"
                            fill={true}
                            src="/img/chrome.svg" />
                    </li>
                    <li className="relative w-[35px] h-[35px]"
                        onClick={() => {
                            setOpenWindow(true)
                            setApp('terminal')
                        }}>
                        <Image
                            alt="icon_menu"
                            className="w-[35px] h-[35px] object-cover"
                            fill={true}
                            src="/img/terminal.svg" />
                    </li>
                    <li className="relative w-[35px] h-[35px]"
                        onClick={() => {
                            setOpenWindow(true)
                            setApp('explorer')
                        }}>
                        <Image
                            alt="icon_menu"
                            className="w-[35px] h-[35px] object-cover"
                            fill={true}
                            src="/img/folder.svg" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer