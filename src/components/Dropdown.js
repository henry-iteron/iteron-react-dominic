import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ConsultMenu, DigitMenuItems, PortfolioMenu } from "./MenuItems";
import "./Dropdown.css"


function Dropdown({ type }) {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    let MenuItems = []

    switch (type) {
        case "digitize":
            MenuItems = DigitMenuItems;
            break;
        case "consultation":
            MenuItems = ConsultMenu;
            break;
        case "portfolio":
            MenuItems = PortfolioMenu;
            break;
        default:
            MenuItems = null;
            break;
    }

    return (
        <>
            <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Dropdown;