import styles from "./MainScreen.module.scss"

function MainScreen({ children }) {
    return (
        <div className={styles.c_main_screen}>
            {children}
        </div>
    )
}

export default MainScreen