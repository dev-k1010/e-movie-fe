import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

export default function ButtonLogo() {
  const location = useLocation();
  const navigate = useNavigate();

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

  return (
    <NavLink to="/home" onClick={handleClick} className="w-full h-full justify-center items-center flex overflow-hidden">
      <div className="flex flex-col justify-center items-center relative group ">
        <img
          src="/logo.jpg"
          alt="Logo"
          className="w-[6vw] h-[3vw] object-contain"
        />
        <img
          src="/light-red.png"
          alt="Logo"
          className="w-full h-[1.5vw] object-contain "
        />
        <div className="absolute inset-0  bg-gradient-to-t bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300 w-full h-full"></div>
      </div>
    </NavLink>
  )
}
