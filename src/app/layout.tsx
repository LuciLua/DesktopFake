import styles from "../styles/Root.module.scss"
import "../styles/globals.scss"

import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import MainScreen from "../components/MainScreen/MainScreen"
import Image from "next/image"
import WindowContextProvider from "../contexts/WindowContext"

export default function RootApp({ children }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Desktop Fake</title>
            </head>
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