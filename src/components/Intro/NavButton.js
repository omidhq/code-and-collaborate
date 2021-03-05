import React from 'react'
import CategoryImage from '../image/CategoryImage'

const NavButton = (props) => {
    return (
        <div className="category">
            <CategoryImage alt="Illustration" filename={props.filename} />
        </div>
    )
}

export default NavButton
