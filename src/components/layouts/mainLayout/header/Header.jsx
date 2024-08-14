import React, { memo, useState } from "react";
import {
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { quanLyNguoiDungActions } from "../../../../stores/quanLyNguoiDungReducer/quanLyNguoiDungReducer";
import { UserLogin } from "../../../../config/api";
import { quanLyDatVeActions } from "../../../../stores/quanLyDatVeReducer/quanLyDatVeReducer";
import Logo from "./Logo";
import MenuDesktop from "./MenuDesktop";
import UserMobile from "./UserMobile";
import MenuMobile from "./MenuMobile";
import UserDesktop from "./UserDesktop";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const nguoiDung = JSON.parse(localStorage.getItem(UserLogin));
  const [navbar, setNavbar] = useState(false);

  const handleMenu = () => (
    setNavbar(!navbar)
  )

  const handleLogOut = () => {
    dispatch(quanLyNguoiDungActions.dangXuat());
    dispatch(quanLyDatVeActions.huyErrKetQuaDatVe());
    navigate("/home");
  }

  const handleClick = (e) => {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của NavLink
    if (location.pathname !== "/home") {
      navigate("/home");
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  // Button.js
  const Button = ({ to, children, className }) => (
    <NavLink
      to={to}
      className={`px-3 py-1 flex justify-center items-center ${className}`}
    >
      {children}
    </NavLink>
  );

  // Sử dụng các button component
  const LoginButton = () => (
    <Button to="/user/login" className="space-x-2">
      <span>Đăng nhập</span>
    </Button>
  );

  const RegisterButton = () => (
    <Button to="/user/register" className="inline-block px-4 py-1 outline-dotted outline-3 outline-offset-4 bg-color1">
      Đăng kí
    </Button>
  );
  const menuItems = [
    { id: "lichChieuPhim", label: "Lịch chiếu" },
    { id: "danhSachPhim", label: "Danh sách" },
    { id: "rapChieu", label: "Rạp chiếu" },
    { id: "tinTuc", label: "Tin tức" },
  ];

  return (
    <>
      <div
        style={{ zIndex: 1000, }}
        className="sticky top-0 left-0 w-full h-full lg:h-[100px] bg-black shadow-sm shadow-black/50 lg:px-16 md:grid grid-cols-8 gap-3 justify-center p-3 items-center overflow-hidden box-border "
      >

        <div className="col-span-1 ">
          <Logo handleMenu={handleMenu} handleClick={handleClick} />
        </div>

        <div className="col-span-5 hidden md:block  font-light">
          <MenuDesktop menuItems={menuItems} handleClick={handleClick} />
        </div>

        <div className="col-span-2 hidden md:block">
          <UserDesktop nguoiDung={nguoiDung} handleLogout={handleLogOut} LoginButton={LoginButton} RegisterButton={RegisterButton} />
        </div>
      </div >

      {/* Sider */}
      {
        navbar &&
        <div
          style={{ zIndex: 2000 }}
          className=" h-screen w-2/3 bg-black fixed top-0 right-0 "
        >
          <div className="pr-2 space-y-7 w-full flex flex-col justify-start items-end">
            <button onClick={handleMenu} className="w-10 h-10 text-white ">X</button>
            <MenuMobile menuItems={menuItems} />
            <UserMobile nguoiDung={nguoiDung} handleLogOut={handleLogOut} LoginButton={LoginButton} RegisterButton={RegisterButton} />
          </div>
        </div>
      }

    </>
  );
}
export default memo(Header);
