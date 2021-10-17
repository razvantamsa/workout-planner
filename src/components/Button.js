import React from 'react';
import "./Button.css";

const Button = ({option, selectedButton, onClick, navbar, directionClass}) => {

    let type = ( navbar===true ? 
        (selectedButton === option ? "navbar selected" : "navbar") : directionClass);

    return (
        <div className={type} onClick={onClick} >{option}</div>
    )
}

export default Button
