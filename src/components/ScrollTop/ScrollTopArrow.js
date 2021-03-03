import React, {useState, useEffect} from 'react'
import './ScrollTopArrow.module.css'

const ScrollTopArrow = () => {
    const [showScroll, setShowScroll] = useState(false)
    
    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop)
        return function cleanup() {
            window.removeEventListener('scroll', checkScrollTop)
        }
    })
    
    const checkScrollTop = () => {
        if(!showScroll && window.pageYOffset > 400) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false)
        }
    }

    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    return (
        <button className="scrollTop" onClick={scrollTop} style={{display: showScroll ? 'flex' : 'none'}}>
            go to top
        </button>
    )
}

export default ScrollTopArrow
