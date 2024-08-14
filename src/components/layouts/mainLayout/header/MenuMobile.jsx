// components/MenuMobile.js
import React from 'react';
import { Link } from 'react-scroll';

const MenuMobile = ({ handleClick, menuItems }) => (
    <ul className="space-y-2 mb-0 text-lg">
        {menuItems.map((menuItem, index) => (
            <li key={index} className="flex justify-end">
                <Link
                    onClick={handleClick}
                    to={menuItem.id}
                    className="text-white transition duration-500 hover:text-color4 hover:cursor-pointer"
                    smooth={true}
                    duration={1000}
                    offset={-60}
                    spy={true}
                >
                    {menuItem.label}
                </Link>
            </li>
        ))}
    </ul>
);

export default MenuMobile;
