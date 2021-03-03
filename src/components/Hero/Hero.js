import React from 'react'
import RicolaVideo from '../../images/ricola-video.mp4'
import classes from '../Hero/Hero.module.css'
import VideoControls from '../Hero/VideoControls'

const Hero = () => {
    return (
        <div className={classes.Container} >
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={RicolaVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className={classes.Content}>
                <div className={classes.SubContent} >
                    <VideoControls text="Pause" value="pause"/>
                    <VideoControls text="Mute" value="mute"/>
                </div>
            </div>
        </div>
    )
}

export default Hero
