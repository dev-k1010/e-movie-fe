// components/UserMobile.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { KeyOutlined, LogoutOutlined } from '@ant-design/icons';

const UserMobile = ({ nguoiDung, handleLogOut, LoginButton, RegisterButton }) => (<>
    {nguoiDung ?
        <div className='flex justify-center items-center space-x-3'>
            <NavLink
                to="profile"
                className="inline-block text-lg text-start rounded-lg text-white "
            >
                <div className="flex items-center justify-end space-x-2">
                    <span className="text-white font-bold text-lg">
                        {nguoiDung.hoTen}
                    </span>
                    <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black font-bold text-lg">
                        {nguoiDung.hoTen[0]}
                    </span>
                </div>
            </NavLink>
            {nguoiDung.maLoaiNguoiDung === "QuanTri" && (
                <NavLink
                    to="/admin/films"
                    className=" text-white flex justify-center items-center"
                >
                    < KeyOutlined className="text-white text-2xl" />
                </NavLink>
            )}
            <button
                onClick={handleLogOut}
                className="w-7 h-7 text-red-700  "
            >
                <LogoutOutlined className='text-lg' />
            </button>
        </div>
        :
        <div className="flex justify-end items-center space-x-5 text-white pr-2">
            <LoginButton />
            <RegisterButton />
        </div>
    } </>
);

export default UserMobile;
