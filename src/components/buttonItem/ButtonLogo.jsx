import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import BorderedContainer from '../ui/BorderedContainer';

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
        <BorderedContainer>
          <div className='px-8 flex flex-col justify-center items-center'>
            <img
              src="/logo.jpg"
              alt="Logo"
              className="w-[8vw] h-[2.5vw] object-contain"
            />
            {/* <img
              src="/light-red-1.png"
              alt="Logo"
              className="w-[10vw] h-[1vw] object-contain "
            /> */}
          </div>
        </BorderedContainer>

      </div>
    </NavLink>
  )
}
