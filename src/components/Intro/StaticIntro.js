import React from 'react'
import NavButton from './NavButton'
import './StaticIntro.css'

const StaticIntro = () => {
    return (
        <div className="wrapper">
            <h1 className="staticIntroTitle">We have a vision.</h1>
            <p>We are leading the way towards a more sustainable future and have a great belief that if we take footsteps together, one at a time, we can lead the change when it comes to sustainability.</p>
            <p>We are constantly improving our sustainability work and we want to share our vision.</p>
            <p>We believe that our of 28 footsteps strategy will inspire and guide your company or organisation to improve your own sustaiability work.  Join our footsteps in Nature, People and Business and you too can lead the world towards a more brighter sustainable future.</p>
            <p>As of 2021, we have committed ourselves to three goals:</p>
            
            <NavButton filename="Business-illustration.png"/>
        </div>
    )
}

export default StaticIntro
