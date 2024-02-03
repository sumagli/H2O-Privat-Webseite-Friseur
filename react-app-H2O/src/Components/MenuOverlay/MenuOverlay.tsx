import React, { useEffect } from 'react';
import styles from './MenuOverlay.module.css';
import { MdClose } from "react-icons/md";

interface NavbarProps {
    setOverlay: (overlay: boolean) => void;
    overlay: boolean;
}

const MenuOverlay = ({ setOverlay, overlay }: NavbarProps) => {
    useEffect(() => {
        if (overlay) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [overlay]);

    return (
        <div>
            <div className={`${styles.MenuOverlay} ${overlay ? styles.open : styles.closed}`}>
                <div className={styles.MenuOverlayContent}>

                    <div className={styles.MenuOverlayContentItem}>
                        <a onClick={() => setOverlay(!overlay)} href="/#Directions">Anfahrt</a>
                    </div>
                    <div className={styles.MenuOverlayContentItem}>
                        <a onClick={() => setOverlay(!overlay)} href="/#Pricing">Preise</a>
                    </div>
                    <div className={styles.MenuOverlayContentItem}>
                        <a onClick={() => setOverlay(!overlay)} href="/#Team">Team</a>
                    </div>
                    <div className={styles.MenuOverlayContentItem}>
                        <a onClick={() => setOverlay(!overlay)} href="/#Footer">Öffnungszeiten</a>
                    </div>
                    <div className={styles.MenuOverlayContentItem}>
                        <a onClick={() => setOverlay(!overlay)} href="/#Footer">Kontakt</a>
                    </div>

                </div>
                <div className={styles.MenuOverlayIcon}>
                    <MdClose color='white' onClick={() => setOverlay(!overlay)} />
                </div>
            </div>
            <div className={styles.MenuOverlayRight} onClick={() => setOverlay(!overlay)}></div>
        </div>

    );
};

export default MenuOverlay;
