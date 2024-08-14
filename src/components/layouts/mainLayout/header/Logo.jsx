// components/Logo.js
import { MenuOutlined } from '@ant-design/icons';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = ({ handleMenu, handleClick }) => (
    <div className="flex items-center justify-between lg:block lg:pr-10 ">
        <NavLink to="/home" onClick={handleClick}>
            <div className="flex justify-center items-center">
                <img className="w-28 lg:36" src="/logo.jpg" alt="" />
            </div>
        </NavLink>
        {handleMenu && (
            <button
                className="px-3 py-2 text-white rounded outline-none border md:hidden"
                onClick={handleMenu}
            >
                <MenuOutlined />
            </button>
        )}

    </div>
);

export default Logo;
