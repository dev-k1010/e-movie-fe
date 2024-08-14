import React, { memo, useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { quanLyRapServices } from "../../../services/quanLyRapServices";
import { UserLogin } from "../../../config/api";
import { SelectHomeTool } from "./style/style";
import moment from "moment";
import { Tooltip } from "antd";


const usePlaceholderClass = (arrCumRap) => useMemo(() => (
  `font-normal text-lg ${arrCumRap.length > 0 ? "text-black" : "text-black/30"}`
), [arrCumRap])

const useButtonClass = (suatDaChon) => useMemo(() => (`w-[150px] md:w-[150px] h-[60px] bg-color1 text-white font-normal text-lg md:mb-0 ${!suatDaChon ? 'opacity-70 cursor-not-allowed' : 'hover:transition hover:duration-500 hover:bg-color1/70'}`), [suatDaChon])

function HomeTool({ listPhim }) {

  const navigate = useNavigate();
  const [arrCumRap, setArrCumRap] = useState([]); // Danh sách các cụm rạp chiếu
  const [arrLichChieu, setArrLichChieu] = useState([]); // Danh sách các suất chiếu của phim
  const [rapDaChon, setRapDaChon] = useState(null); // Cụm rạp đã chọn
  const [suatDaChon, setSuatDaChon] = useState(null); // Suất chiếu đã chọn

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
        setArrLichChieu([]); // Xóa danh sách suất chiếu khi phim thay đổi
        setRapDaChon(null); // Xóa thông tin cụm rạp đã chọn
        setSuatDaChon(null); // Xóa thông tin suất chiếu đã chọn
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
    setSuatDaChon(null); // Xóa thông tin suất chiếu đã chọn khi cụm rạp thay đổi
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

    navigate(`/ticket/${suatDaChon.maLichChieu}`);

  }, [navigate, suatDaChon]);

  // Memoize các options cho Select để tối ưu hiệu suất
  const phimOptions = useMemo(() =>
    listPhim.map((phim) => ({
      label: <span className="font-normal text-lg">{phim.tenPhim}</span>,
      value: phim.maPhim,
    })), [listPhim]);

  const rapOptions = useMemo(() =>
    arrCumRap.flatMap((rap) =>
      rap.cumRapChieu.map((cumRap) => ({
        label: (
          <Tooltip title={`${rap.tenHeThongRap} - ${cumRap.diaChi}`} overlayClassName="text-white text-lg rounded py-1 px-2">
            <span
              className="font-normal text-lg"
            >
              {rap.tenHeThongRap} - {cumRap.diaChi}
            </span>
          </Tooltip>
        ),
        value: cumRap.maCumRap,
      }))
    ), [arrCumRap]);


  const suatChieuOptions = useMemo(() =>
    arrLichChieu.map((suat) => ({
      label: <span className="font-normal text-lg">{moment(suat.ngayChieuGioChieu).format('DD/MM/YYYY HH:mm')}</span>,
      value: suat.maLichChieu,
    })), [arrLichChieu]);


  return (
    <div className="flex md:flex-row justify-center items-center bg-white">
      {/* Component chọn phim */}
      <SelectHomeTool
        className="w-[300px] md:w-[150px] lg:w-[450px] h-[50px]"
        placeholder={<span className="text-black font-normal text-lg">Chọn phim</span>}
        onChange={handleChonPhim}
        options={phimOptions}
      />

      {/* Component chọn rạp */}
      <SelectHomeTool
        className="w-[300px] md:w-[150px] lg:w-[450px] h-[50px]"
        placeholder={<span className={usePlaceholderClass(arrCumRap)}>Chọn rạp</span>}
        onChange={handleChonRap}
        options={rapOptions}
        value={rapDaChon ? rapDaChon.maCumRap : undefined}
        disabled={!arrCumRap.length}
      />

      {/* Component chọn suất chiếu */}
      <SelectHomeTool
        className="w-[300px] md:w-[150px] lg:w-[450px] h-[50px]"
        placeholder={<span className={usePlaceholderClass(arrLichChieu)}>Chọn suất</span>}
        onChange={handleChonSuatChieu}
        options={suatChieuOptions}
        value={suatDaChon ? suatDaChon.maLichChieu : undefined}
        disabled={!rapDaChon}
      />

      {/* Nút đặt vé */}
      <button
        style={{ zIndex: 100 }}
        onClick={suatDaChon ? handleDatVe : null}
        className={useButtonClass(suatDaChon)}
      >
        Đặt vé nhanh
      </button>
    </div>
  );
}

export default memo(HomeTool);
