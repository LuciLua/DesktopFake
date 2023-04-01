'use client'

import Image from "next/image"
import { useContext, useState } from "react"
import { WindowContext } from "../../contexts/WindowContext"
import styles from "./Footer.module.scss"

function Footer() {

    const { openWindow, setOpenWindow, setApp } = useContext(WindowContext)

    return (
        <div className={styles.c_footer}>
            <div className={styles.c_footer_menu}>
                <ul className={styles.menu}>
                    <li
                        className={styles.icon_menu}
                        onClick={() => {
                            setOpenWindow(true)
                            setApp('spotify')
                        }}>
                        <Image
                            alt="icon_menu"
                            fill={true}
                            src="/img/spotify.svg" />
                    </li>
                    <li className={styles.icon_menu}
                        onClick={() => {
                            setOpenWindow(true)
                            setApp('pycharm')
                        }}>
                        <Image
                            alt="icon_menu"
                            fill={true}
                            src="/img/pycharm.svg" />
                    </li>
                    <li className={styles.icon_menu}
                        onClick={() => {
                            setOpenWindow(true)
                            setApp('vscode')
                        }}>
                        <Image
                            alt="icon_menu"
                            fill={true}
                            src="/img/vscode.svg" />
                    </li>
                    <li className={styles.icon_menu}
                        onClick={() => {
                            setOpenWindow(true)
                            setApp('chrome')
                        }}>
                        <Image
                            alt="icon_menu"
                            fill={true}
                            src="/img/chrome.svg" />
                    </li>
                    <li className={styles.icon_menu}
                        onClick={() => {
                            setOpenWindow(true)
                            setApp('terminal')
                        }}>
                        <Image
                            alt="icon_menu"
                            fill={true}
                            src="/img/terminal.svg" />
                    </li>
                    <li className={styles.icon_menu}
                        onClick={() => {
                            setOpenWindow(true)
                            setApp('explorer')
                        }}>
                        <Image
                            alt="icon_menu"
                            fill={true}
                            src="/img/folder.svg" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer