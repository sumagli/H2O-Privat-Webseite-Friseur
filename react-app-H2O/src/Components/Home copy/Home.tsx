import styles from './Home.module.css';

import "../../Assats//Fonts/Fonts.css"


export default function Home2() {


    return (
        <div className={styles.home}>

            <div className={styles['top-left']}>
                <p>
                    <span className={styles['light-blue']}>
                        <a
                            href="http://www.zeno.org/Philosophie/M/Kant,+Immanuel/Kritik+der+praktischen+Vernunft/Beschlu%C3%9F" target="_blank" rel="noreferrer"
                        >
                            ... der bestirnte Himmel über mir ...
                        </a>
                    </span>
                </p>
            </div>

            <div className={styles['bottom-right']}>
                <h1>SECHANO</h1>
                <p className={styles.smallText}>
                    S
                    <span className={styles['light-blueSmall']}>CHWÄGERL M</span>
                    ECHAN
                    <span className={styles['light-blueSmall']}>ICAL </span>
                    O
                    <span className={styles['light-blueSmall']}>BJECTS</span>
                </p>
            </div>
        </div>
    );
}
