import React, { memo, useState } from "react";
import {
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { quanLyNguoiDungActions } from "../../../../stores/quanLyNguoiDungReducer/quanLyNguoiDungReducer";
import { UserLogin } from "../../../../constants/api";
import { quanLyDatVeActions } from "../../../../stores/quanLyDatVeReducer/quanLyDatVeReducer";
import { KeyOutlined,  LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import { Link } from "react-scroll";



function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const nguoiDung = JSON.parse(localStorage.getItem(UserLogin));
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => {
    if (location.pathname !== "/home") {
      navigate("/home");
    }
  };

  const menuItems = [
    { id: "lichChieuPhim", label: "Lịch chiếu" },
    { id: "danhSachPhim", label: "Danh sách" },
    { id: "rapChieu", label: "Rạp chiếu" },
    { id: "tinTuc", label: "Tin tức" },
  ];

  return (
    <div
      style={{ zIndex: 10000 }}
      className={`fixed top-0 left-0 w-full bg-black shadow-sm shadow-black/50 px-5 lg:px-16`}
    >
      <div className="w-full justify-between bg-transparent lg:items-center lg:flex py-5">

        {/* Logo */}
        <div>
          <div className="flex items-center justify-between lg:block lg:pr-10 ">
            <NavLink to="home">
              <div className="flex justify-center items-center">
                <img className="w-36" src="/logo.jpg" alt="" />
              </div>
            </NavLink>
            <div className="lg:hidden">
              <button
                className="p-3 text-white rounded-md outline-none border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`flex-1 justify-self-center lg:block lg:py-0 ${navbar ? "block" : "hidden"
            }`}
        >
          {/* MENU DESKTOP*/}
          <ul className="items-center justify-start lg:flex space-x-6 text-md font-light hidden">
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
          {/* MENU MOBILE */}
          <div className="mt-3 space-x-2 lg:hidden flex justify-end">
            {nguoiDung ? (
              <div className="inline-block space-x-2 space-y-3 lg:px-5">

                {/* User */}
                <div className="flex flex-col space-y-2 ">
                  <NavLink
                    to="profile"
                    className="inline-block text-lg text-start rounded-lg text-white "
                  >
                    <div className="flex items-center justify-end space-x-2">
                      <span className="text-white font-bold text-lg">
                        {nguoiDung.hoTen}
                      </span>
                      <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center ">
                        <span className="text-black font-bold text-lg">
                          {nguoiDung.hoTen[0]}
                        </span>
                      </span>

                    </div>
                  </NavLink>
                </div>

                {/* Navigation */}
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
                        key={index}
                      >
                        {menuItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Log Out, Page Admin */}
                <div className="flex justify-end space-x-2 ">
                  {nguoiDung.maLoaiNguoiDung === "QuanTri" ? (
                    <NavLink
                      to="/admin/films"
                      className="inline-block px-4 py-2 text-white bg-gray-800 rounded-md"
                    >
                      Page Admin
                    </NavLink>
                  ) : (
                    ""
                  )}
                  <div className="col-span-1 flex justify-end items-start">
                    <button
                      onClick={() => {
                        dispatch(quanLyNguoiDungActions.dangXuat());
                        dispatch(quanLyDatVeActions.huyErrKetQuaDatVe());
                        navigate("/home");
                      }}
                      className="w-10 h-10 text-red-700 bg-white rounded-md shadow hover:bg-gray-500 hover:text-white transition duration-300"
                    >
                      <LogoutOutlined />
                    </button>
                  </div>
                </div>

              </div>
            ) :
              (
                <div className="inline-block space-x-2">
                  <NavLink
                    to="/user/login"
                    className="inline-block px-4 py-2 text-center text-white bg-gray-800 rounded-md shadow hover:bg-gray-500 hover:text-white transition duration-300"
                  >
                    Đăng nhập
                  </NavLink>
                  <NavLink
                    to="/user/register"
                    className="inline-block px-4 py-2 text-white bg-dark rounded-md shadow hover:bg-gray-500 hover:text-white transition duration-300"
                  >
                    Đăng kí
                  </NavLink>
                </div>
              )}
          </div>
        </div>

        {/* Button User Desktop */}
        <div className="hidden lg:block">
          {nguoiDung ? (

            <div className="space-x-3 flex justify-end items-center">
              {nguoiDung.maLoaiNguoiDung === "QuanTri" ? (
                <NavLink to="/admin/films" className="inline-block ">
                  < KeyOutlined className="text-white text-2xl" />
                </NavLink>
              ) : (
                ""
              )}
              <NavLink
                to="profile"
                className="text-lg rounded-lg text-white hover:text-white transition duration-300 relative z-10 inline-block"
              >
                <span className="w-12 h-12 bg-white rounded-full flex items-center justify-center ">
                  <span className="text-black font-bold text-lg">
                    {nguoiDung.hoTen[0]}
                  </span>
                </span>
              </NavLink>
              <div className="h-8 w-[2px] bg-white"></div>
              <button
                onClick={() => {
                  dispatch(quanLyNguoiDungActions.dangXuat());
                  dispatch(quanLyDatVeActions.huyErrKetQuaDatVe());
                  navigate("/home");
                }}
                className="flex justify-end items-center text-white space-x-2"
              >
                <LogoutOutlined className="text-md" />
                <span >Đăng xuất</span>
              </button>
            </div>
          ) : (
            <div className="flex justify-center items-center space-x-5 text-white pr-2">
              <NavLink
                to="/user/login"
                className="flex px-3 py-1 space-x-2 justify-center items-center"
              >

                {/* <LoginOutlined className="text-2xl" /> */}

                <span>Đăng nhập</span>
              </NavLink>
              <NavLink
                to="/user/register"
                className="inline-block px-4 py-1 outline-dotted  outline-3 outline-offset-4 bg-color1 "
              >
                Đăng kí
              </NavLink>
            </div>
          )}
        </div>

      </div>
    </div >
  );
}
export default memo(Header);
