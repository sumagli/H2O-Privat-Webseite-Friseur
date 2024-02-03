import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton'; // Use IconButton for direct icon interaction
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views-react-18-fix';
import { autoPlay } from 'react-swipeable-views-utils';
import MobileStepper from '@mui/material/MobileStepper';
import styles from './Slideshow.module.css';
import { Link } from 'react-router-dom'; // Make sure you've installed react-router-dom

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const SwipeableTextMobileStepper = ({ overlay, uperTitle, title, subTitle, buttonText, showButtonText, images, isVisible, blur, textPositionDown }) => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps); // Wrap to the first image when reaching the end
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps); // Wrap to the last image when going back from the first
    };

    return (
        <Box className={styles.slideshowContainer}>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={setActiveStep}
                enableMouseEvents
                interval={5000}
            >
                {images.map((step, index) => (
                    <div key={index}>
                        <Box
                            component="img"
                            className={`${styles.imageBox}`}
                            src={step.imgPath}
                            alt={`Image ${index}`}
                        />
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            {!blur &&
                <div>
                    <Box className={styles.stepperBox}>
                        <MobileStepper
                            steps={maxSteps}
                            position="static"
                            activeStep={activeStep}
                            sx={{ backgroundColor: 'transparent', width: 'auto' }}
                        />
                    </Box>
                    <IconButton
                        onClick={handleBack}
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: 16,

                            backgroundColor: 'rgba(255, 255, 255, 0.7)',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 1)',
                            },
                            fontSize: '2rem',
                        }}
                    >
                        <KeyboardArrowLeft fontSize="inherit" />
                    </IconButton>
                    <IconButton
                        onClick={handleNext}

                        sx={{
                            position: 'absolute',
                            top: '50%',
                            right: 16,

                            backgroundColor: 'rgba(255, 255, 255, 0.7)',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 1)',
                            },
                            fontSize: '2rem',
                        }}
                    >
                        <KeyboardArrowRight fontSize="inherit" />
                    </IconButton>

                </div>
            }

            <div className={`${!textPositionDown ? styles.textContent : styles.textContentDown}`}>
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
                {showButtonText &&
                    <Link
                        to="/DieIdee"
                        className={`${styles.buttonBelow} ${isVisible ? styles.animateonvisiblebuttonBelow : styles.animateOutButtonBelow}`}
                    >
                        <span>{buttonText}</span>
                    </Link>
                }
            </div>

        </Box>
    );
}

export default SwipeableTextMobileStepper;
