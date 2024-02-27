import styles from './Home.module.css';
import React, { useRef } from 'react';

import "../../Assats//Fonts/Fonts.css"

import Directions from '../Directions/Directions';
import MainPage from '../MainPage/MainPage';
import NewFooter from '../NewFooter/NewFooter';
import Pricing from '../pricing/pricing';
import SlideshowTeam from '../SlideshowTeam/SlideshowTeam';

interface HomeProps {
    overlay: boolean;
}

export default function Home({ overlay }: HomeProps) {
    return (
        <div className={styles.home}>
            <div id='Home'>
                <MainPage isVisible={!overlay} blur={true} />
            </div>
            <div id='Directions'>
                <Directions />
            </div>
            <div id='Pricing'>
                <Pricing />
            </div>
            <div id='Team'>
                <SlideshowTeam overlay={overlay} isVisible={true} />
            </div>
            <div id='Footer'>
                <NewFooter mainPage={true} />
            </div>
        </div >
    );
}
