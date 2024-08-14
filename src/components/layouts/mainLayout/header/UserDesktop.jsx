import React from 'react';
import { NavLink } from 'react-router-dom';
import { KeyOutlined, LogoutOutlined } from '@ant-design/icons';

const UserDesktop = ({ nguoiDung, handleLogout, LoginButton, RegisterButton }) => {

    return (<>{
        nguoiDung ?
            <div className="space-x-3 flex justify-end items-center">
                {nguoiDung.maLoaiNguoiDung === "QuanTri" && (
                    <NavLink to="/admin/films" className="inline-block">
                        <KeyOutlined className="text-white text-xl" />
                    </NavLink>
                )}
                <NavLink
                    to="profile"
                    className="text-lg text-white hover:text-white transition duration-300 "
                >
                    <span className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-bold text-lg">
                        {nguoiDung.hoTen[0]}
                    </span>
                </NavLink>
                <div className="h-8 w-[2px] bg-white"></div>
                <button
                    onClick={handleLogout}
                    className="flex justify-end items-center text-white space-x-2 font-light"
                >
                    <LogoutOutlined className="text-md" />
                    <span>Đăng xuất</span>
                </button>
            </div>
            :
            <div className="flex justify-end items-center space-x-5 text-white pr-2">
                <LoginButton />
                <RegisterButton />
            </div>
    }
    </>
    );
};

export default UserDesktop;
