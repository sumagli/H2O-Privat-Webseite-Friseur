import React from 'react';
import styles from './NewFooter.module.css';
import "../../Assats//Fonts/Fonts.css"

const NewFooter = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div ref={ref} className={styles.NewFooter} >
      <div className={styles.blackbar} />
      <div className={styles.footer}>
        <h1 style={{ paddingBottom: `30px` }}>HAAR ZWEI OHH!</h1>
        <hr />
        <div className={styles.footerContent}>
          <div className={styles.links}>
            <h3>Seitenmenü:</h3>
            <a href="#Directions">Anfahrt</a><br />
            <a href="#Pricing">Preise</a><br />
            <a href="#Team">Team</a><br /> <br />
            <a href="/Impressum">Impressum</a><br />
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
          </div>
        </div>
        <hr />
        <div style={{ paddingBottom: `40px` }} />
      </div>
    </div>
  );
});

export default NewFooter;
