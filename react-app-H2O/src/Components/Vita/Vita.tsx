import React, { useEffect, useRef, useState } from 'react';
import styles from './Vita.module.css';
import "../../Assats//Fonts/Fonts.css"
import VitaPages from './VitaPages/VitaPages';
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
import { Helmet } from 'react-helmet';

const Vita = ({ email, name, profession, image, timelineEvents }: any) => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className={styles.Container}>
            <Helmet>
                <title>{`Vita - ${name} | ${profession}`}</title>
                <meta name="description" content={`Erfahren Sie mehr über ${name}, unsere/n ${profession} bei HAAR ZWEI OOH!. Lesen Sie die Vita und beruflichen Meilensteine.`} />
            </Helmet>
            <ThemeProvider theme={theme}>

                <VitaPages
                    showButtonText={false}
                    uperTitle={email}
                    title={name}
                    subTitle={profession}
                    buttonText={"undefined"}
                    isVisible={true}
                    blur={true}
                    textPositionDown={true}
                    imageUrl={image}
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

                <h2 className={styles.h2} >Wir freuen uns auf ihren Besuch</h2>
            </ThemeProvider>

            <NewFooter mainPage={false} />


        </div>
    );
};



export default Vita;
