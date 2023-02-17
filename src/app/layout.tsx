import styles from "../styles/Root.module.scss"
import "../styles/globals.scss"

import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import MainScreen from "../components/MainScreen/MainScreen"
import Image from "next/image"
import WindowContextProvider from "../contexts/WindowContext"

export default function RootApp({ children }) {
    return (
        <html>
            <body className={styles.wrap}>
                <div className={styles.desktop_container}>
                    <WindowContextProvider>

                        <Header />
                        <div className={styles.background}>
                            <Image
                                alt="background"
                                fill={true}
                                src={"/img/wpp.jpg"}
                            />
                        </div>
                        <MainScreen>
                            {children}
                        </MainScreen>
                        <Footer />
                    </WindowContextProvider>
                </div>
            </body>
        </html>
    )
}