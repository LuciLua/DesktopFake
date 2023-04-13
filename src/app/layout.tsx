import "../styles/globals.css"

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
            <body className="flex justify-center items-center w-full h-full relative bg-[radial-gradient(circle,rgba(238,174,202,1)0%,rgba(215,179,202,1)33%,rgba(148,187,233,1)91%)]">
                <div className="w-full h-full max-w-[1900px] max-h-[900px] bg-[#1e1e1e] relative overflow-hidden rounded-[10px]">
                    <WindowContextProvider>
                        <Header />
                        <div className="absolute top-0 z-1 w-full h-full">
                            <Image
                                className="object-cover"
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
        </html >
    )
}