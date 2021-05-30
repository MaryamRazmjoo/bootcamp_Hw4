import React from 'react'
import './Button.css'

const customButton = ({ text, icon }) => {
    return (
        <button className='custom-btn'
            endIcon={icon ? <div className='btn-icon-container'>{icon}</div> : null}>
            <span className='btn-text'>{text}</span>
        </button>
    )
}

export default customButton
