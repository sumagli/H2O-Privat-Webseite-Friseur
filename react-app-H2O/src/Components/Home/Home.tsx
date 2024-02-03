import styles from './Home.module.css';
import React, { useRef } from 'react';

import "../../Assats//Fonts/Fonts.css"

import Couch from '../../Assats/Images/Couch.png'
import Counter from '../../Assats/Images/Counter.jpg'
import Door from '../../Assats/Images/Door.jpg'
import Directions from '../Directions/Directions';
import Team from '../Team/Team';
import { Slideshow } from '@mui/icons-material';
import SwipeableTextMobileStepper from '../Slideshow/Slideshow';
import test1 from '../../Assats/Images/blured/1dark.jpg';
import test2 from '../../Assats/Images/2.jpg';
import test3 from '../../Assats/Images/blured/3dark.jpg';
import test4 from '../../Assats/Images/blured/4dark.jpg';
import test5 from '../../Assats/Images/blured/5dark.jpg';

import test11 from '../../Assats/Images/1dark.jpg';
import test22 from '../../Assats/Images/2.jpg';
import test33 from '../../Assats/Images/3dark.jpg';
import test44 from '../../Assats/Images/4dark.jpg';
import test55 from '../../Assats/Images/5dark.jpg';

import team from '../../Assats/Images/team.jpg';
import Iris from '../../Assats/Images/Iris.jpg'
import Iris2 from '../../Assats/Images/iris2.jpeg'
import Iris3 from '../../Assats/Images/iris3.jpeg'
import Sabiene from '../../Assats/Images/Sabiene.jpg'
import Sabiene2 from '../../Assats/Images/mitBalken2.png'
import Ilona from '../../Assats/Images/Lisa.jpg'
import NewFooter from '../NewFooter/NewFooter';
import Pricing from '../pricing/pricing';
import SlideshowTeam from '../SlideshowTeam/SlideshowTeam';

interface HomeProps {
    overlay: boolean;
}

export default function Home({ overlay }: HomeProps) {
    const footerRef = useRef(null);


    const test = [
        { imgPath: test11 },
        { imgPath: test33 },
        { imgPath: test44 },
        { imgPath: test55 },
    ];

    const imagesTeam = [
        { imgPath: team },
        { imgPath: Iris },
        { imgPath: Iris2 },
        { imgPath: Iris3 },
        { imgPath: Sabiene2 },
        { imgPath: Ilona },

    ];


    return (
        <div className={styles.home}>
            <div id='Home'>
                <SwipeableTextMobileStepper showButtonText={false} uperTitle={"Wilkommen bei Haar Zwei 0HH!"} title={"Ihr Friseur in Stuttgart Ost"} subTitle={"Damen & Herren"} buttonText={"undefined"} images={test} isVisible={!overlay} blur={true} overlay={overlay} />
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
                <NewFooter />
            </div>

        </div >
    );
}
