import styles from "./PyCharm.module.css"
import { Ubuntu } from "next/font/google"

const ubuntu = Ubuntu({ weight: ["300", "400", "500", "700"], subsets: ["latin"] })

function PyCharm() {
    return (
        <div className={`${styles.container} ${ubuntu.className}`}>
            <div className={styles.content}>
                <header className={styles.mainHeader}>
                    <ul className={styles.ulmainHeader}>
                        <li><button>File</button></li>
                        <li><button>Edit</button></li>
                        <li><button>Selection</button></li>
                        <li><button>Run</button></li>
                    </ul>
                </header>
                <div className={styles.c_project}>
                    <aside>
                        <h1>PROJECT</h1>
                        <p>index.js</p>
                        <p>server/app.js</p>
                    </aside>
                    <div className={styles.project}>
                        <header>
                            <ul>
                                <li><button>index.html</button></li>
                                <li><button>style.module.scss</button></li>
                                <li><button>app.js</button></li>
                            </ul>
                        </header>
                        <main>
                            <textarea name="" id="">
                                    &lt;html&gt;Este é um parágrafo simples.&gt;
                                        &lt;p&gt;Este é um parágrafo simples.&lt;/p&gt;
                                    &lt;/html&gt;
                            </textarea>
                        </main>
                    </div>
                </div>
                <footer>
                    <p>foterzinh</p>
                </footer>
            </div>
        </div>
    )
}
export default PyCharm