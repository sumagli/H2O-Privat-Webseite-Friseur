import React from 'react';
import styles from './NewFooter.module.css';
import "../../Assats//Fonts/Fonts.css"
import { FaInstagram } from "react-icons/fa";

interface FooterProps {
  mainPage: boolean;
}

const NewFooter = ({ mainPage }: FooterProps) => {
  return (
    <div className={styles.NewFooter} >
      <div className={`${mainPage ? styles.blackbar : ''}`} />
      <div className={`${styles.footer} ${!mainPage ? styles.footerNotFixed : ''}`} >
        <h1 style={{ paddingBottom: `30px` }}>HAAR ZWEI OOH!</h1>
        <hr />
        <div className={styles.footerContent}>
          <div className={styles.links}>
            <h3>Seitenmenü:</h3>
            {(mainPage) &&
              <div>
                <a href="#Directions">Anfahrt</a><br />
                <a href="#Pricing">Preise</a><br />
                <a href="#Team">Team</a><br /> <br />
              </div>
            }
            <a href="/Impressum2">Impressum</a><br />
            <a href="/Datenschutz">Datenschutz</a>
          </div>
          <div className={styles.openingTimes}>
            <h3>Öffnungszeiten:</h3>
            <p>Montag: 11:00 - 20:00</p>
            <p>Dienstag: 09:00 - 20:00</p>
            <p>Mittwoch: 08:00 - 15:00</p>
            <p>Donnerstag: 08:00 - 15:00</p>
            <p>Freitag: 09:00 - 20:00</p>
            <p>Samstag: 08:00 - 13:00</p>

          </div>
          <div>
            <h3>Kontakt:</h3>
            <p>Hackstraße 22</p>
            <p>70190 Stuttgart</p>
            <p>0711 - 262 99 66</p>
            <a href="https://www.instagram.com/haarzweiooh_stuttgart/" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
              <FaInstagram color='white' size="32px" />
            </a>

          </div>
        </div>
        <hr />
        <div style={{ paddingBottom: `40px` }} />
      </div>
    </div>
  );
}

export default NewFooter;
