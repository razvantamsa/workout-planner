import React from 'react'
import Button from "./Button"
import "./Header.css"

const Header = ({selectedButton, setSelectedButton, options_list}) => {

    const onButtonClick = (mode) => {
        setSelectedButton(mode);
    }

    return (
        <nav className="Header">
            {
                options_list.map( (option, i) => <Button key={option} navbar={true} directionClass="" option={option} selectedButton={selectedButton} onClick={() => onButtonClick(option)}/> )
            }
        </nav>
    )
}


export default Header
