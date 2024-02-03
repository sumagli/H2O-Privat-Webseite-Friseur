import styles from './Team.module.css';

import "../../Assats//Fonts/Fonts.css"
import Iris from '../../Assats/Images/Iris.jpg'
import Sabiene from '../../Assats/Images/Sabiene.jpg'
import Lisa from '../../Assats/Images/Lisa.jpg'


export default function Team() {
    return (
        <div className={styles.Team}>
            <h1>Team</h1>

            <div className={styles.Galarie}>
                <div>
                    <h2>Iris</h2>
                    <div className={styles.imageContainer}>
                        <img src={Iris} alt="Foto von Iris" />
                        <span className={styles.overlayText}>
                            1990 - aaaaaaaaaaaaaaa <br />
                            2000 - test
                        </span>

                    </div>
                    <h2>Friseurmeisterin</h2>
                </div>
                <div>
                    <h2>Sabiene</h2>
                    <div className={styles.imageContainer}>
                        <img src={Sabiene} alt="Foto von Sabiene" />
                    </div>
                    <h2>Friseurmeisterin</h2>
                </div>
                <div>
                    <h2>Lisa</h2>
                    <div className={styles.imageContainer}>
                        <img src={Lisa} alt="Foto von Lisa" />

                    </div>
                    <h2>Friseurmeisterin & Fotografin</h2>
                </div>
            </div>
        </div>
    );
}




