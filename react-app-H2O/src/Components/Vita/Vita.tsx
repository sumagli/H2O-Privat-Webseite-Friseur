import React, { useEffect, useRef, useState } from 'react';
import styles from './Vita.module.css';
import "../../Assats//Fonts/Fonts.css"
import SwipeableTextMobileStepper from '../Slideshow/Slideshow';
import test from '../../Assats/Images/Iris.png'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import NewFooter from '../NewFooter/NewFooter';

const Vita = ({ email, name, profession, image, timelineEvents }: any) => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className={styles.Container}>
            <ThemeProvider theme={theme}>

                <SwipeableTextMobileStepper
                    showButtonText={false}
                    uperTitle={email}
                    title={name}
                    subTitle={profession}
                    buttonText={"undefined"}
                    images={image}
                    isVisible={true}
                    blur={true}
                    overlay={false}
                    textPositionDown={true}
                />
                <div className={styles.scrolldownIndicator}></div>



                <div className={styles.Vita}>

                    <h1>Vita</h1>

                    <Timeline position="alternate">
                        {timelineEvents.map((event: any, index: any) => (
                            <TimelineItem key={index}>
                                <TimelineOppositeContent color="text.secondary">
                                    {event.year}
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    {index < timelineEvents.length - 1 && <TimelineConnector />}
                                </TimelineSeparator>
                                <TimelineContent>{event.content}</TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>

                </div>
                <div className={styles.test} />

                <h2 className={styles.h2} >Wir freunen uns auf ihren Besuch</h2>


                <NewFooter mainPage={false} />

            </ThemeProvider>
        </div>
    );
};



export default Vita;
