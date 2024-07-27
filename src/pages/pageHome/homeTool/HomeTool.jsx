import { Modal, Select, Space } from "antd";
import React, { memo, useState } from "react";
import { quanLyRapServices } from "../../../services/quanLyRapServices";
import { useNavigate } from "react-router-dom";
import { UserLogin } from "../../../constants/api";
import styled from "styled-components";

function HomeTool(props) {
  const { listPhim } = props;
  const navigate = useNavigate();
  const [arrCumRap, setArrCumRap] = useState();
  const [arrLichChieu, setArrLichChieu] = useState();
  const [rapDaChon, setRapDaChon] = useState();
  const [suatDaChon, setSuatDaChon] = useState();


  /**
   * Gọi API lấy danh sách cụm rạp chiếu   
   * @param {string} maPhim - Mã của phim
   * @returns {Array} - Mảng cụm rạp chiếu phim
   * *
   */
  const handleChonPhim = async (maPhim) => {
    try {
      const result = await quanLyRapServices.layThongTinLichChieuPhim(maPhim);
      const phim = result.data.content;
      setArrCumRap(phim.heThongRapChieu);
      setArrLichChieu([]);
      setRapDaChon(null);
      setSuatDaChon(null);
    } catch (error) {
      console.log(error.data);
    }
  };

  /**
   * Lọc và lấy danh sách lịch chiếu phim 
   * @param {string} maRap - Mã của hệ thống cần lọc
   * @returns {Array} - Mảng chứa lịch chiếu phim
   */
  const handleChonRap = (maRap) => {
    const suatChieuTheoRap = arrCumRap
      .filter((rap) => rap.maHeThongRap === maRap)
      .flatMap((rap) => rap.cumRapChieu.flatMap((lichChieu) => lichChieu.lichChieuPhim));

    setRapDaChon(arrCumRap.find((rap) => rap.maHeThongRap === maRap));
    setSuatDaChon(null);
    setArrLichChieu(suatChieuTheoRap);
  };

  /**
   * Cập nhật lại trạng thái người dùng chọn giờ chiếu phim
   * @param {Date} suatChieu -  Thời gian chiếu phim
   */
  const handleChonSuatChieu = (suatChieu) => {
    setSuatDaChon(arrLichChieu.find((item) => item.maLichChieu === suatChieu));
  };

  const handelDatVe = () => {

    localStorage.getItem(UserLogin)
      ? navigate(`/ticket/${suatDaChon.maLichChieu}`)
      : navigate("/user/login");

  };

  return (
      <div className="flex flex-col md:flex-row justify-center items-center rounded-md bg-white">
        <Space wrap className="py-2 flex flex-col md:flex-row text-black font-semibold text-lg mr-2">
          {/* Phim */}
          <StyledSelect
            className=" w-[300px] md:w-[150px] lg:w-[370px] h-[50px]"
            placeholder={
              <span className="text-black font-semibold text-lg">Chọn phim</span>
            }
            onChange={handleChonPhim}
            options={listPhim.map((phim) => ({
              label: (
                <span className="font-semibold text-lg">{phim.tenPhim}</span>
              ),
              value: phim.maPhim,
            }))}
          />
          {/* Rạp */}
          <StyledSelect
            className="w-[300px] md:w-[150px] lg:w-[370px] h-[50px]"
            placeholder={<span className="text-black font-semibold text-lg">Chọn rạp</span>}
            value={rapDaChon ? rapDaChon.maHeThongRap : undefined}
            onChange={handleChonRap}
            options={
              arrCumRap && arrCumRap.length > 0
                ? arrCumRap.map((rap) => ({
                  label: <span className="font-semibold text-lg">{rap.tenHeThongRap}</span>,
                  value: rap.maHeThongRap,
                }))
                : []
            }
            disabled={!arrCumRap || arrCumRap.length === 0}
          />
          {/* Giờ chiếu */}
          <StyledSelect
            className=" w-[300px] md:w-[150px] lg:w-[370px] h-[50px]"
            placeholder={
              <span className="text-black font-semibold text-lg">
                Chọn suất
              </span>
            }
            value={suatDaChon ? { label: <span className="font-semibold text-lg">{suatDaChon.ngayChieuGioChieu}</span>, value: suatDaChon.maLichChieu } : undefined}
            onChange={handleChonSuatChieu}
            options={
              arrCumRap && arrLichChieu ?
                arrLichChieu.map((rap) => ({
                  label: <span className="font-semibold text-lg">{rap.ngayChieuGioChieu}</span>
                  ,
                  value: rap.maLichChieu,
                }))
                : []
            }
            disabled={!rapDaChon || rapDaChon.length === 0}
          />
        </Space>
        <button
          style={{ zIndex: 100 }}
          onClick={() => {
            if (suatDaChon) {

              handelDatVe();

            }
          }}
          className={`w-[200px] md:w-[150px] h-[50px] rounded-md bg-color1 text-white font-semibold text-lg mb-5 md:mb-0 ${!suatDaChon ? 'opacity-70 cursor-not-allowed ' : 'hover:transition hover:duration-500 hover:bg-color1/70'}`}
        >
          Đặt vé nhanh
        </button>
      </div>
    
  );
}
export default memo(HomeTool);

const StyledSelect = styled(Select)
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
