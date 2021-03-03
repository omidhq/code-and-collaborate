import React from 'react'
import RicolaVideo from '../../images/ricola-video.mp4'

export default function Hero() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <video autoplay muted controls style={{
            outline: 'none',
            maxWidth: 1400,
            width: '100%'
        }}>
                <source src={RicolaVideo} type="video/mp4" />
            </video>
        </div>
    )
}
