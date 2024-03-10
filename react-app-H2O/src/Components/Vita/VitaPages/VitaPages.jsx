import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views-react-18-fix';
import { autoPlay } from 'react-swipeable-views-utils';
import MobileStepper from '@mui/material/MobileStepper';
import styles from './VitaPages.module.css';
import { Link } from 'react-router-dom';
import { useVitaPictures } from '../../../Helper/service.ts';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const VitaPages = ({ imageUrl, isVisible, blur, textPositionDown, uperTitle, title, subTitle, showButtonText, buttonText }) => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const modifiedTitle = title.split(' ')[0];
    //const imageUrl = useVitaPictures(modifiedTitle);
    const test = 1;


    return (

        <Box className={styles.slideshowContainer}>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={setActiveStep}
                enableMouseEvents
                interval={5000}
            >
                <div>
                    <Box
                        component="img"
                        className={`${styles.imageBox}`}
                        src={imageUrl}
                        alt="Vita Image"
                    />
                </div>
            </AutoPlaySwipeableViews>
            <div className={styles.textContentDown}>

                <div
                    className={`${styles.uperTitle} ${isVisible ? styles.animateonvisibleuperTitle : styles.animateOutUperTitle}`}
                >
                    {uperTitle}
                </div>
                <div
                    className={`${styles.centeredText} ${isVisible ? styles.animateonvisiblecenteredText : styles.animateOutCenteredText}`}
                >
                    {title}
                </div>
                <div
                    className={`${styles.subTitle} ${isVisible ? styles.animateonvisiblesubTitle : styles.animateOutSubTitle}`}
                >
                    {subTitle}
                </div>
            </div>
            <div className={styles.PhotoBy}>Foto: Ilona Scheffbuch</div>
        </Box>
    );
}

export default VitaPages;
