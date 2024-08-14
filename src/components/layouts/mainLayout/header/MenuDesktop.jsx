// components/MenuDesktop.js
import React from 'react';
import { Link } from 'react-scroll';

const MenuDesktop = ({ handleClick, menuItems }) => (
    <ul className="flex items-center justify-start space-x-6 ">
        {menuItems.map((menuItem, index) => (
            <li key={index}>
                <Link
                    onClick={handleClick}
                    to={menuItem.id}
                    className="text-white transition duration-500 hover:text-color1 hover:cursor-pointer"
                    smooth={true}
                    duration={1000}
                    offset={-60}
                    spy={true}
                    key={index}
                >
                    {menuItem.label}
                </Link>
            </li>
        ))}
    </ul>
);

export default MenuDesktop;
