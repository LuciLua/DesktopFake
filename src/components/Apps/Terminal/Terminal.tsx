import styles from "./Terminal.module.scss"
import { Fira_Code } from "next/font/google"

const firacode = Fira_Code({ subsets: ["latin"], weight: "variable" })

function Terminal() {
    return (
        <>
            <div className={`${styles.container} ${firacode.className}`}>
                <div className={styles.content}>
                    <p>Welcome to terminal app</p>
                    <p>Visit my website: <a href="https://www.lucilua.com.br" target={"_blank"}>www.lucilua.com.br</a></p>
                    <p>thank you for testing this app</p>
                    <br />
                    <div className={styles.c_input}>
                        <p>C:\User\Dark{">"}</p>
                        <input spellCheck={false} type="text" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Terminal