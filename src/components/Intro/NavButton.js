import React from 'react'
import CategoryImage from '../image/CategoryImage'
import './StaticIntro.css'

const NavButton = (props) => {
    return (
        <div className="category">
            <CategoryImage className="categoryImg" alt="Illustration" filename={props.filename} />
            <h2 className="categoryTitle">{props.categoryTitle}</h2>
            <p className="categoryText">{props.categoryText}</p>
        </div>
    )
}

export default NavButton
