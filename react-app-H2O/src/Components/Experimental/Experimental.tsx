import React, { useState, useRef, useEffect } from 'react';
import styles from './Experimental.module.css';
import Video from '../Video/Video';
import Earthanimation from '../../Assats/Video/finalVideo1.mp4';
import RealVideo from '../../Assats/Video/finalVideo2.mp4';
import NewFooter from '../NewFooter/NewFooter';


// Define the Star type for TypeScript
interface Star {
    id: number;
    left: string;
    top: string;
    size: string; // Added size property
    animationDuration: string;
    animationDelay: string;
}

export default function Experimental() {
    const [isSnapping, setIsSnapping] = useState(true);
    const numSections = 3;
    const [currentSection, setCurrentSection] = useState(0);
    const [stars, setStars] = useState<Star[]>([]);
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    const [isVisiblePart1, setIsVisiblePart1] = useState(false);
    const [isVisiblePart2, setIsVisiblePart2] = useState(false);


    useEffect(() => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const scrollContainer = scrollContainerRef.current;
        const handleScroll = () => {

            console.log("test1:" + scrollPosition);
            console.log("test2:" + sectionRefs.current[1]!.getBoundingClientRect().top + window.scrollY);
            if (
                sectionRefs.current[1] &&
                sectionRefs!.current[1]!.getBoundingClientRect().top + window.scrollY < scrollPosition
            ) {
                console.log('visible');
                setIsVisiblePart1(true);
            }

            if (
                sectionRefs.current[2] &&
                sectionRefs.current[2].getBoundingClientRect().top + window.scrollY < scrollPosition
            ) {
                setIsVisiblePart2(true);
            }

            if (scrollContainer) {
                const scrollPosition = scrollContainer.scrollTop;
                let bgKeyPosition = sectionRefs.current[2]?.offsetTop || 0;;

                if (scrollPosition > bgKeyPosition) {
                    setIsSnapping(false);
                } else {
                    setIsSnapping(true);
                }
            }
        };
        scrollContainer?.addEventListener('scroll', handleScroll);

        return () => {
            scrollContainer?.removeEventListener('scroll', handleScroll);
        };

    }, []);

    const generateStars = (numStars: number) => {
        return Array.from({ length: numStars }, (_, index) => ({
            id: index,
            left: '0',
            top: `${Math.random() * 100}vh`,
            size: `${Math.random() * 3 + 1}px`,
            animationDuration: `${Math.random() * 120 + 80}s`,
            animationDelay: `${Math.random() * -120}s`,
        }));
    };

    useEffect(() => {
        setStars(generateStars(300));
    }, []);

    const scrollToSection = (index: number) => {
        const section = sectionRefs.current[index];
        section?.scrollIntoView({ behavior: 'smooth' });
    };



    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setCurrentSection(Number(entry.target.getAttribute('data-index')));
                    }
                });
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.5,
            }
        );

        sectionRefs.current.forEach((ref, index) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            observer.disconnect();
        };
    }, []);


    const renderStars = () => {
        return stars.map((star) => (
            <div
                key={star.id}
                className={styles.star}
                style={{
                    left: star.left,
                    top: star.top,
                    width: star.size,
                    height: star.size,
                    animationDuration: star.animationDuration,
                    animationDelay: star.animationDelay,
                }}
            />
        ));
    };

    const renderSidebarIndicators = () => {
        return (
            <div className={styles.sidebar}>
                {Array.from({ length: numSections }).map((_, index) => (
                    <div
                        key={index}
                        onClick={() => scrollToSection(index)}
                        className={`${styles.sidebarIndicator} ${currentSection === index ? styles.active : ''}`}
                    />
                ))}
            </div>
        );
    };

    const scrollContainerRef = useRef<HTMLDivElement>(null);


    return (
        <>
            <div ref={scrollContainerRef} className={styles.container}>
                {renderSidebarIndicators()}
                <div ref={(el) => (sectionRefs.current[0] = el)}
                    data-index="0"
                    className={`${styles.Experimental} ${styles.child} ${isSnapping ? '' : styles.noScrollSnap}`}>
                    <div className={styles.foregroundImage}></div>
                    <div className={styles['top-left']}>
                        <p>
                            <span className={styles['light-blue']}>
                                <a href="http://www.zeno.org/Philosophie/M/Kant,+Immanuel/Kritik+der+praktischen+Vernunft/Beschlu%C3%9F" target="_blank" rel="noreferrer">
                                    ... der bestirnte Himmel über mir ...
                                </a>
                            </span>
                        </p>
                    </div>

                    {renderStars()}

                    <div className={styles['bottom-right']}>
                        <h1>SECHANO</h1>
                        <p className={styles.smallText}>
                            S<span className={styles['light-blueSmall']}>CHWÄGERL M</span>ECHAN<span className={styles['light-blueSmall']}>ICAL </span>O<span className={styles['light-blueSmall']}>BJECTS</span>
                        </p>
                    </div>
                </div>
                <div ref={(el) => (sectionRefs.current[1] = el)}
                    data-index="1"
                    className={`${styles.child} ${isSnapping ? '' : styles.noScrollSnap}`}>
                    <Video title={'EINZIGARTIGE IDEEN'} subTitle={'DESIGN DAS ÜBERZEUGT'} buttonText={'Mehr erfahren'} videoUrl={Earthanimation} uperTitle={'SECHANO PRESENTS'} isVisible={isVisiblePart1} />
                </div>
                <div ref={(el) => (sectionRefs.current[2] = el)}
                    data-index="2"
                    className={`${styles.child} ${isSnapping ? '' : styles.noScrollSnap}`}>
                    <Video title={'DER BAU DER UHR'} subTitle={'COMING SOON'} videoUrl={RealVideo} uperTitle={'EINE INSPIRIERENDE SERIE'} isVisible={isVisiblePart2} />
                </div>
                <NewFooter />
            </div>
        </>
    );
}