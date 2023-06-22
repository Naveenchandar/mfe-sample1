import React from 'react'

const Button = ({ label }) => {
    const onClick = () => {
        console.log("button clicked");
    }
    return (
        <button onClick={onClick}>{label} gggggggggg</button>
    )
}

export default Button