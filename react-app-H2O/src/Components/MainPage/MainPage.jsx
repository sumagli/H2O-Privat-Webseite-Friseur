import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views-react-18-fix';
import { autoPlay } from 'react-swipeable-views-utils';
import styles from './MainPage.module.css';
import LogoGesicht1 from '../../Assats/Images/LogoGesicht1.png';
import LogoGesicht2 from '../../Assats/Images/LogoGesicht2.png';
import LogoGesicht3 from '../../Assats/Images/LogoGesicht3.png';
import Typography from '@mui/material/Typography';
import test33 from '../../Assats/Images/3dark.jpg';
import test44 from '../../Assats/Images/4dark.jpg';
import test55 from '../../Assats/Images/5dark.jpg';
import useVacationMessage from '../../Helper/service.ts';



const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const MainPage = ({ isVisible, blur }) => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const vacationMessage = useVacationMessage();
    const images = [
        { imgPath: test33 },
        { imgPath: test44 },
        { imgPath: test55 },
    ];


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

            <div className={styles.textContent}>
                <Box
                    component="img"
                    className={`${styles.icons} ${isVisible ? styles.animateonvisibleuperTitle : styles.animateOutUperTitle}`}
                    src={LogoGesicht1}
                    alt={`test`}

                />

                <div
                    className={`${styles.uperTitle} ${isVisible ? styles.animateonvisibleuperTitle : styles.animateOutUperTitle}`}
                >
                    {"Ihr Friseur in Stuttgart Ost"}
                </div>
                <div
                    className={`${styles.centeredText} ${isVisible ? styles.animateonvisiblecenteredText : styles.animateOutCenteredText}`}
                >
                    {"Haar Zwei Ohh!"}
                </div>
                <div
                    className={`${styles.subTitle} ${isVisible ? styles.animateonvisiblesubTitle : styles.animateOutSubTitle}`}
                >
                    {"... für den eigenen Kopf"}
                </div>

                <div>
                    <Box
                        component="img"
                        className={`${styles.icons} ${isVisible ? styles.animateonvisiblesubTitle : styles.animateOutSubTitle}`}
                        src={LogoGesicht2}
                        alt={`test`}
                        style={{ marginRight: '5%' }} // Inline style to set size
                    />

                    <Box
                        component="img"
                        className={`${styles.icons} ${isVisible ? styles.animateonvisiblesubTitle : styles.animateOutSubTitle}`}
                        src={LogoGesicht3}
                        alt={`test`}

                    />
                </div>

            </div>
            <div className={styles.PhotoBy}>Foto: Ilona Scheffbuch</div>
            {vacationMessage.showMessage &&
                <Box
                    className={styles.vacationBox}
                >
                    <Typography variant="body1" component="div" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                        {vacationMessage.message}
                    </Typography>
                </Box>
            }
        </Box>
    );
}

export default MainPage;
