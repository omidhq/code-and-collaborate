import React from 'react'

const SubHeading = (props) => {
    return (
        <div className={props.className}>
            <h2 style={{
                fontFamily: 'El Messiri',
                fontSize: '8rem' 
            }}>{props.subHeadingText}</h2>
        </div>
    )
}

export default SubHeading
