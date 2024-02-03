import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { BiMenu } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";

interface NavbarProps {
  setOverlay: (overlay: boolean) => void;
  overlay: boolean;
}

const Navbar = ({ setOverlay, overlay }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''} ${overlay ? styles.fadeOut : styles.fadeIn}`}>
      <nav className={styles.topBar}>
        <ul>
          <li className={styles.pointer} onClick={() => setOverlay(!overlay)}>
            <BiMenu color='white' />
            Menü
          </li>
          <li>
            <a href="#Home" className={styles.iconLink}>
              <FaHome color='white' />
            </a>
          </li>
          <li>
            <BsFillTelephoneFill color='white' />
            <label> </label>0711 - 262 99 66
          </li>
        </ul>
      </nav>
      {isScrolled ? null : <hr className={styles.hr} />}
    </div>
  );
};

export default Navbar;
