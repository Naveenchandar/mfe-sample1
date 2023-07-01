import React from 'react'

const Button = ({ label, navigate }) => {
    const onClick = () => {
        console.log("button clicked");
        navigate("/")
    }
    return (
        <button onClick={onClick}>{label}</button>
    )
}

export default Button