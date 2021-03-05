import React from 'react'

const SubHeading = (props) => {
    return (
        <div className={props.className}>
            <h2>{props.subHeadingText}</h2>
        </div>
    )
}

export default SubHeading
