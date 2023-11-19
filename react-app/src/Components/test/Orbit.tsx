import React, { useState, useEffect } from 'react';
import styles from './Orbit.module.css';

const Orbit = () => {
  const [earthAngle, setEarthAngle] = useState(0);
  const [marsAngle, setMarsAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setEarthAngle((prevAngle) => prevAngle + 1); // Earth's movement speed
      setMarsAngle((prevAngle) => prevAngle + 0.5); // Mars's movement speed
    }, 16); // Approximately 60 frames per second

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className={styles.orbitContainer}>
      <div className={styles.sun}></div>
      <div className={styles.orbit + ' ' + styles.earthOrbit}></div>
      <div className={styles.orbit + ' ' + styles.marsOrbit}></div>
      <div
        className={styles.earth}
        style={{
          transform: `rotate(${earthAngle}deg) translateX(100px) rotate(-${earthAngle}deg)`
        }}
      ></div>
      <div
        className={styles.mars}
        style={{
          transform: `rotate(${marsAngle}deg) translateX(150px) rotate(-${marsAngle}deg)`
        }}
      ></div>
    </div>
  );

};

export default Orbit;
