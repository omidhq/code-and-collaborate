import React from 'react'
import RicolaVideo from '../../images/ricola-video.mp4'
import './Hero.css'
import VideoControls from '../Hero/VideoControls'

const Hero = () => {
    return (
        <div className="Container" >
            <video autoPlay="autoplay" loop="loop" muted className="Video" >
                <source src={RicolaVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="Content">
                <div className="SubContent" >
                    <VideoControls text="Pause" value="pause"/>
                    <VideoControls text="Mute" value="mute"/>
                </div>
            </div>
        </div>
    )
}

export default Hero
