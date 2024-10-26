import React from 'react'
import { UserLogin } from '../../config/api';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { quanLyNguoiDungActions } from '../../stores/quanLyNguoiDungReducer/quanLyNguoiDungReducer';
import { quanLyDatVeActions } from '../../stores/quanLyDatVeReducer/quanLyDatVeReducer';
import { LoginOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';

export default function UserAccount() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const nguoiDung = JSON.parse(localStorage.getItem(UserLogin));
    const handleLogOut = () => {
        dispatch(quanLyNguoiDungActions.dangXuat());
        dispatch(quanLyDatVeActions.huyErrKetQuaDatVe());
        navigate("/home");
    }

    const LoginButton = () => (
        <NavLink to="/user/login" className="text-[#cdcdcd] font-sans font-normal text-sm text-center z-10 ">
            Đăng nhập
        </NavLink>
    );

    return (
        <div className="space-x-4 flex justify-center items-center pl-5">
            {
                nguoiDung ?
                    <>
                        <NavLink
                            to="profile"
                            className=" text-white flex justify-center items-center  rounded-full p-2 bg-color1"
                        >
                            <UserOutlined className="text-center text-[#cdcdcd] text-xl transition duration-300 hover:cursor-pointer" />
                        </NavLink>
                        <div className="h-5 w-[1px] bg-white"></div>
                        <button
                            onClick={handleLogOut}
                            className="flex justify-end items-center text-[#cdcdcd] space-x-2 "
                        >
                            <LogoutOutlined className="text-sm" />
                            <span className='font-sans font-normal text-sm'>Đăng xuất</span>
                        </button>
                    </>
                    :

                    <span className="relative px-4 py-3 group bg-color1 hover:bg-[#8e0000] transition-all duration-300 rounded-md overflow-hidden">
                        {/* Icon and button */}
                        <span className='space-x-2 flex justify-center items-center'>
                            <LoginButton />
                            <LoginOutlined className="text-center text-[#cdcdcd] text-sm hover:cursor-pointer  transition-all duration-300 ease-out transform " />
                        </span>


                    </span>



            }
        </div>
    )
}
