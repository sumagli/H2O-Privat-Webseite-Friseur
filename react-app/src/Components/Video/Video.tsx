import React, { useEffect, useRef, useState } from 'react';
import styles from './Video.module.css';
import { Link } from 'react-router-dom'; // Make sure you've installed react-router-dom
import "../../Assats//Fonts/Fonts.css"

interface VideoProps { title: string; subTitle: string; buttonText?: string; videoUrl: string; uperTitle: string; scrollindicator?: boolean; isVisible?: boolean; }

const Video = ({ uperTitle, title, subTitle, buttonText, videoUrl, scrollindicator, isVisible }: VideoProps) => {
    return (
        <div className={styles.container}>
            <video
                autoPlay
                loop
                muted
                className={styles.fullscreenVideo}
                preload='auto'
            >
                <source src={videoUrl} type="video/mp4" />
            </video>
            <div className={styles.textContent}>
                <div
                    className={`${styles.uperTitle} ${isVisible ? styles.animateonvisibleuperTitle : ''}`}
                >
                    {uperTitle}
                </div>
                <div
                    className={`${styles.centeredText} ${isVisible ? styles.animateonvisiblecenteredText : ''}`}
                >
                    {title}
                </div>
                <div
                    className={`${styles.subTitle} ${isVisible ? styles.animateonvisiblesubTitle : ''}`}
                >
                    {subTitle}
                </div>
                {buttonText &&
                    <Link
                        to="/DieIdee"
                        className={`${styles.buttonBelow} ${isVisible ? styles.animateonvisiblebuttonBelow : ''}`}
                    >
                        <span>{buttonText}</span>
                    </Link>
                }
            </div>
        </div>
    );
}

export default Video;
