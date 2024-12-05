import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import "../bottomHeader/style/style.css"
import { Link } from 'react-scroll';
import UserAccount from '../userAccount/UserAccount';

const menuItems = [

    { id: "lichChieuPhim", label: <span className='tracking-wide font-serif font-normal text-sm uppercase'>Lịch chiếu</span> },
    { id: "danhSachPhim", label: <span className='tracking-wide font-serif font-normal text-sm uppercase'>Phim</span> },
    { id: "cumRap", label: <span className='tracking-wide font-serif font-normal text-sm uppercase'>Cụm rạp</span> },
    { id: "suKien", label: <span className='tracking-wide font-serif font-normal text-sm uppercase'>Sự kiện</span> },
    { id: "tinTuc", label: <span className='tracking-wide font-serif font-normal text-sm uppercase'>Tin tức</span> },
    { id: "khuyenMai", label: <span className='tracking-wide font-serif font-normal text-sm uppercase'>Khuyến mãi</span> },
    { id: "", label: <UserAccount /> },
];

export default function BottomHeader() {
    const navigate = useNavigate();
    const location = useLocation();
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
        <ul className=" flex items-center justify-start space-x-7">
            {menuItems.map((menuItem, index) => (
                <React.Fragment key={index}>
                    {index !== 0 && (
                        <span className="w-[0.8vh] h-[0.8vh] bg-[#898989] rounded-full"></span>
                    )}
                    <li key={index} >
                        <Link

                            onClick={handleClick}
                            to={menuItem.id}
                            className=" text-[#cdcdcd]  transition duration-300 hover:text-white hover:cursor-pointer"
                            smooth={true}
                            duration={1000}
                            offset={-60}
                            spy={true}
                        >
                            {menuItem.label}
                        </Link>
                    </li>
                </React.Fragment>
            ))}
        </ul>
    )
}
