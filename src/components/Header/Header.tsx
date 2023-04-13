import styles from "./Header.module.css"

function Header() {

    const date = new Date('Jul 12 2011');

    return (
        <div className={styles.c_header}>
            {date.getDate()}/{date.getMonth()}/{date.getFullYear()}
        </div>
    )
}

export default Header