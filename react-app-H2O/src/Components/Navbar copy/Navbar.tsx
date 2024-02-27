import React from 'react';
import styles from './Navbar.module.css';

const Navbar2 = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar2;
