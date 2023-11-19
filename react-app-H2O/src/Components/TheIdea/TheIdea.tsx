import React, { useEffect, useRef, useState } from 'react';
import styles from './TheIdea.module.css';
import Video from '../Video/Video';
import Earthanimation from '../../Assats/Video/finalVideo1.mp4';
import Orbit from '../test/Orbit';
import MarsRetrogradeAnimation from '../MarsRetrogradeAnimation/MarsRetrogradeAnimation';
import "../../Assats//Fonts/Fonts.css"
import watch from '../../Assats/Images/watch.jpg'
import picture1 from '../../Assats/Images/picture1.png'
import young from '../../Assats/Images/picture1.png'
import picture2 from '../../Assats/Images/picture2.png'
import picture2ed from '../../Assats/Images/picture2.5.png'
import picture3 from '../../Assats/Images/picture3.png'


const TheIdea = () => {

  const [isVisiblePart1, setIsVisiblePart1] = useState(false);
  const [isVisiblePart2, setIsVisiblePart2] = useState(false);

  const part1Ref = useRef<HTMLDivElement>(null);
  const part2Ref = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    if (
      part1Ref.current &&
      part1Ref.current.getBoundingClientRect().top + window.scrollY < scrollPosition
    ) {
      setIsVisiblePart1(true);
    }

    if (
      part2Ref.current &&
      part2Ref.current.getBoundingClientRect().top + window.scrollY < scrollPosition
    ) {
      setIsVisiblePart2(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className={styles.TheIdea}>
      <Video
        uperTitle="SECHANO PRESENTS"
        title="DIE IDEE"
        subTitle="EINE UHR BASSIEREND AUF DEM ABSTAND ZWISCHEN ERDE UND MARS"
        videoUrl={Earthanimation}
        isVisible={true}
      />
      <div className={styles.scrolldownIndicator}></div>
      <div className={styles.textPart}>

        <div style={{ paddingTop: `100px`, paddingBottom: `200px` }} ref={part1Ref} className={`${styles.Part1} ${isVisiblePart1 ? styles.fadeInOnScroll : ''}`} >
          <h1>
            Keplers heliozentrisches Weltbild</h1>
          <p >
            Johannes Kepler revolutionierte die Astronomie mit dem heliozentrischen Weltbild, welches die Sonne als Zentrum unseres Sonnensystems darstellt. Durch seine detaillierten Beobachtungen und Berechnungen, insbesondere der Marsbahn, bewies Kepler, dass die Erde und andere Planeten elliptische Bahnen um die Sonne ziehen. Diese Entdeckung, grundlegend für Keplers Gesetze der Planetenbewegung, verdrängte das geozentrische Modell, das die Erde als Mittelpunkt des Universums ansah, und legte den Grundstein für die moderne Astronomie.
          </p>

        </div>
        <img src={young} className={styles.WatchPicture} alt="MarsRetrogradeAnimation" />

        <div ref={part2Ref} style={{ paddingTop: `200px`, paddingBottom: `700px` }} className={`${styles.Part2} ${isVisiblePart2 ? styles.fadeInOnScroll : ''}`}>
          <div className={styles.textContainer}>
            <h1>Wie kam Kepler zu diesm Ergebniss</h1>
            <p>
              Kepler kam zu seinen Schlüssen über das heliozentrische System, indem er die Umlaufbahnen und Positionen der Erde und des Mars genau studierte. Die elliptischen Bahnen der beiden Planeten und ihre unterschiedlichen Umlaufzeiten - etwa ein Jahr für die Erde und 1,88 Jahre für den Mars - führten zu sich ständig verändernden relativen Positionen. Diese Beobachtungen, kombiniert mit Vergleichen der Geschwindigkeiten beider Planeten relativ zur Sonne und anderen Sternen, bestätigten die Annahme, dass sie um die Sonne kreisen.
            </p>
          </div>
        </div>
        <div className={styles.Watch2Container}>
          <img src={picture2} className={styles.WatchPicture2} alt="MarsRetrogradeAnimation" />
          <img src={picture2ed} className={styles.WatchPicture2} alt="MarsRetrogradeAnimation" />
        </div>


        <div ref={part1Ref} style={{ paddingTop: `1000px`, paddingBottom: `200px` }} className={`${styles.Part1} ${isVisiblePart1 ? styles.fadeInOnScroll : ''}`} >
          <h1>Die Rückläufigkeit des Mars</h1>
          <p >
            Die Rückläufigkeit des Mars, ein Phänomen, bei dem sich Mars scheinbar rückwärts am Sternenhimmel bewegt, ist ein weiterer Beleg für Keplers heliozentrisches Modell. Diese scheinbare Umkehr der Bewegung entsteht, wenn die Erde auf ihrer schnelleren Umlaufbahn den langsameren Mars überholt. Diese optische Täuschung tritt ungefähr alle zwei Jahre auf und bietet Astronomen wertvolle Erkenntnisse über die Umlaufbahnen und Bewegungsdynamiken der Planeten, während sie in der Astrologie symbolische Bedeutungen hat.
          </p>

        </div>
        <img src={picture3} className={styles.WatchPicture3} style={{ paddingBottom: `200px` }} alt="MarsRetrogradeAnimation" />
      </div>
    </div >

  );
};
export default TheIdea;
