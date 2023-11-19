import React from 'react';
import styles from './NewFooter.module.css';
import "../../Assats//Fonts/Fonts.css"

const NewFooter = () => {
  return (
    <div className={styles.NewFooter}>
      <div className={styles.blackbar} />
      <div className={styles.footer}>
        <h1 style={{ paddingBottom: `30px` }}>SECHANO</h1>
        <hr />
        <div className={styles.footerContent}>
          <a href="/Impressum">Impressum</a>
          <p>office@sechano.com</p>
        </div>
        <hr />
        <div style={{ paddingBottom: `40px` }} />
      </div>
    </div>
  );
};

export default NewFooter;
