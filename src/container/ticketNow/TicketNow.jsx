import moment from 'moment';
import React, { useCallback, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CaretDownOutlined } from '@ant-design/icons';
import { UserLogin } from '../../config/api';
import { quanLyRapServices } from '../../services/quanLyRapServices';
import { Select, Tooltip } from 'antd';
import "../ticketNow/style/style.css"
import styled from 'styled-components';
import { useModalContext } from '../../context/Modalcontext';



export default function TicketNow({ listPhim }) {
    const { handleClose } = useModalContext()
    const navigate = useNavigate();
    const [arrCumRap, setArrCumRap] = useState([]);
    const [arrLichChieu, setArrLichChieu] = useState([]);
    const [rapDaChon, setRapDaChon] = useState(null);
    const [suatDaChon, setSuatDaChon] = useState(null);

    /**
     * Xử lý sự kiện khi người dùng chọn một phim.
     * - Gọi API để lấy thông tin cụm rạp chiếu và danh sách suất chiếu của phim.
     * - Cập nhật trạng thái với thông tin nhận được từ API.
     * 
     * @param {string} maPhim - Mã phim được chọn.
     */
    const handleChonPhim = useCallback
        (async (maPhim) => {
            const isLoggedIn = !!localStorage.getItem(UserLogin);
            if (!isLoggedIn) {
                navigate("/user/login");
            }

            try {
                const result = await quanLyRapServices.layThongTinLichChieuPhim(maPhim);
                const phim = result.data.content;
                setArrCumRap(phim.heThongRapChieu);
                setArrLichChieu([]);
                setRapDaChon(null);
                setSuatDaChon(null);
            } catch (error) {
                console.error('Lỗi khi lấy thông tin lịch chiếu phim từ redux:', error);
            }
        }, []);

    /**
     * Xử lý sự kiện khi người dùng chọn một cụm rạp.
     * - Lọc danh sách suất chiếu theo cụm rạp được chọn và cập nhật trạng thái.
     * 
     * @param {string} maRap - Mã cụm rạp được chọn.
     */
    const handleChonRap = useCallback((maRap) => {
        const rapPhim = arrCumRap.flatMap((rap) => rap.cumRapChieu).find((item) => item.maCumRap === maRap)

        setRapDaChon(rapPhim);
        setArrLichChieu(rapPhim.lichChieuPhim);
        setSuatDaChon(null);
    }, [arrCumRap]);

    /**
     * Xử lý sự kiện khi người dùng chọn một suất chiếu.
     * - Cập nhật trạng thái với suất chiếu đã chọn.
     * 
     * @param {string} suatChieu - Mã suất chiếu được chọn.
     */
    const handleChonSuatChieu = useCallback((maLichChieu) => {

        const suatChieu = arrLichChieu.find((item) => item.maLichChieu === maLichChieu) || null

        setSuatDaChon(suatChieu);
    }, [arrLichChieu]);

    /**
     * Xử lý sự kiện khi người dùng nhấn nút đặt vé.
     * - Kiểm tra xem người dùng đã đăng nhập hay chưa.
     * - Điều hướng đến trang đặt vé hoặc trang đăng nhập.
     */
    const handleDatVe = useCallback(() => {
        handleClose();
        navigate(`/ticket/${suatDaChon.maLichChieu}`);
    }, [navigate, suatDaChon, handleClose]);


    // Memoize các options cho Select để tối ưu hiệu suất
    const phimOptions = useMemo(() =>
        listPhim.map((phim) => ({
            label: <span className="font-serif font-medium text-lg text-white">{phim.tenPhim}</span>,
            value: phim.maPhim,
        })), [listPhim]);


    const rapOptions = useMemo(() =>
        arrCumRap.flatMap((rap) =>

            rap.cumRapChieu.map((cumRap) => ({
                label: (
                    <Tooltip title={`${rap.tenHeThongRap} - ${cumRap.diaChi}`} overlayClassName="font-serif font-medium text-lg font-medium text-md">
                        <span
                            className="flex items-center whitespace-nowrap overflow-hidden text-ellipsis max-w-full font-serif font-medium text-lg text-white justify-start space-x-3"
                        >
                            <span >{rap.tenHeThongRap
                            }</span>
                            <span>-</span>
                            <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-md">
                                {cumRap.diaChi}
                            </span>

                        </span>
                    </Tooltip >


                ),
                value: cumRap.maCumRap,
            }))
        ), [arrCumRap]);


    const suatChieuOptions = useMemo(() =>
        arrLichChieu.map((suat) => ({
            label: <span className="font-serif font-medium text-lg text-white">{moment(suat.ngayChieuGioChieu).format('DD/MM/YYYY HH:mm')}</span>,
            value: suat.maLichChieu,
        })), [arrLichChieu]);


    return (

        <div className="flex flex-col justify-center items-center space-y-5">
            {/* Component chọn phim */}
            <SelectHomeTool className="w-[300px] md:w-[150px] lg:w-[450px] h-[50px] bg-[#252525]"
                placeholder={<span className="text-white font-sans font-semibold text-md uppercase">Phim</span>}
                onChange={handleChonPhim}
                options={phimOptions}
                suffixIcon={<CaretDownOutlined style={{ color: "#cdcdcd", fontSize: "16px" }} />} // Tùy chỉnh mũi tên
                dropdownStyle={{ backgroundColor: "#252525" }} // Tùy chỉnh nền dropdown nếu cần

            />

            {/* Component chọn rạp */}
            <SelectHomeTool className="w-[300px] md:w-[150px] lg:w-[450px] h-[50px] bg-[#252525]"
                placeholder={
                    <span className={`font-sans font-semibold text-md uppercase ${arrCumRap.length > 0 ? "text-white" : "text-[#cdcdcd]"}`}>Rạp</span>
                }
                onChange={handleChonRap}
                options={rapOptions}
                value={rapDaChon ? rapDaChon.maCumRap : undefined}
                disabled={!arrCumRap.length}
                suffixIcon={<CaretDownOutlined style={{ color: "#cdcdcd", fontSize: "16px" }} />} 
                dropdownStyle={{ backgroundColor: "#252525" }} 
            />

            {/* Component chọn suất chiếu */}
            <SelectHomeTool
                className="w-[300px] md:w-[150px] lg:w-[450px] h-[50px] bg-[#252525]"
                placeholder={
                    <span className={`font-sans font-semibold text-md uppercase ${arrCumRap.length > 0 ? "text-white" : "text-[#cdcdcd]"}`}>Suất chiếu</span>
                }
                onChange={handleChonSuatChieu}
                options={suatChieuOptions}
                value={suatDaChon ? suatDaChon.maLichChieu : undefined}
                disabled={!rapDaChon}
                suffixIcon={<CaretDownOutlined style={{ color: "#cdcdcd", fontSize: "16px" }} />} 
                dropdownStyle={{ backgroundColor: "#252525" }} 
            />

            {/* Nút đặt vé */}

            <button
                style={{ zIndex: 100 }}
                onClick={suatDaChon ? handleDatVe : null}
                className={` w-[150px] md:w-[150px] h-[50px] bg-color1 font-sans font-semibold text-md uppercase md:mb-0 ${!suatDaChon ? 'opacity-70 cursor-not-allowed' : 'hover:transition hover:duration-500 hover:bg-color1/70'}`}
            >
                Đặt vé nhanh
            </button>
        </div>
    );
}

const SelectHomeTool = styled(Select)
    `
  .ant-select-selector  {
    border: none !important ;
    background-color: inherit !important;
    box-shadow: none !important;
  }
    &:hover .ant-select-selector {
        border: none !important;
    }

    &.ant-select-focused .ant-select-selector,
    .ant-select-selector:focus,
    .ant-select-selector:active {
        border: none !important;
    }
 
  `