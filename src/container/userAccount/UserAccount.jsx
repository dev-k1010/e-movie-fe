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


    const logIn = () => (
        <NavLink to="/user/login"
            className="flex justify-center items-center transition-all duration-300 text-[#cdcdcd] space-x-3"
        >
            <LoginOutlined className="text-center text-sm hover:cursor-pointer ease-out transform " />
            <span className='font-serif font-normal text-sm'>Đăng nhập</span>
        </NavLink>
    )

    const logOut = () => (
        <div className='flex space-x-3 justify-center items-center'>


            <span className='text-center font-serif font-normal text-sm transition-all duration-300  text-[#cdcdcd] hover:text-white uppercase'>Tài khoản</span>

            <div div className="h-5 w-[1px] bg-[#898989]"></div>
            <button
                onClick={handleLogOut}
                className="flex justify-center items-center transition-all duration-300 text-[#cdcdcd] hover:text-white space-x-2"
            >

                <LogoutOutlined className="text-sm" />
                <span className='font-serif font-normal text-sm'>Đăng xuất</span>

            </button>
        </div>
    )

    return (
        <>
            {nguoiDung ?
                <>

                    {logOut()}
                </>

                : <>
                    {logIn()}
                </>
            }
        </>

    )
}
