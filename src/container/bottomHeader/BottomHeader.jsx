import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import "../bottomHeader/style/style.css"
import { Link } from 'react-scroll';

const menuItems = [

    // { id: "chuongTrinh", label: "Chương trình" },
    { id: "lichChieuPhim", label: "Lịch chiếu" },
    { id: "danhSachPhim", label: "Danh sách" },
    { id: "rapChieu", label: "Rạp chiếu" },
    { id: "tinTuc", label: "Tin tức" },
    // { id: "anUong", label: "Ăn uống" },
    // { id: "thanhVien", label: "Thành viên" },
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
        <ul className=" flex items-center justify-start space-x-8 ">
            {menuItems.map((menuItem, index) => (
                <React.Fragment key={index}>
                    {index !== 0 && (
                        <span className="w-[0.8vh] h-[0.8vh] bg-[#898989] rounded-full"></span>
                    )}
                    <li key={index} >
                        <Link

                            onClick={handleClick}
                            to={menuItem.id}
                            className="text-[#cdcdcd] font-sans font-normal text-sm transition duration-500 hover:text-color1 hover:cursor-pointer uppercase"
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
