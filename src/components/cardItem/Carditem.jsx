import React, { memo } from "react";
import { Popover, Rate } from "antd";
import { TagOutlined } from "@ant-design/icons";
import Lottie from "lottie-react";
import animationPlay from "../../animation/home/animationPlay.json";
import styled from "styled-components";

const Carditem = ({ phim, navigate, handleOpen, isVirtual }) => {

  const renderContentHover = () => (
    <div className="h-[420px] w-64 flex flex-col items-start space-y-5 relative overflow-hidden">
      <div className="text-center flex justify-center items-center space-x-2">
        <img src={phim.hinhAnh} alt="" loading="lazy" className="w-28 h-32" />
        <div className="flex flex-col items-start justify-start space-y-2">
          <p className="text-black text-xl font-bold">{phim.tenPhim}</p>
          <p className="text-base">
            Mã phim: <span className="text-color4">{phim.maPhim}</span>{" "}
          </p>
        </div>
      </div>
      <div className="text-base space-y-1">
        <div className="flex justify-start items-center space-x-3">
          {phim.hot && (
            <span className="px-2 py-1 bg-red-600 rounded-sm text-white">
              Hot
            </span>
          )}
          <Rate disabled value={phim.danhGia} />
        </div>
        <p>
          Ngày khởi chiếu: <span className="text-color4">{phim.ngayKhoiChieu}</span>
        </p>
        <p className="line-clamp-[5]">{phim.moTa}</p>
        <div className="absolute bottom-0 w-full">
          <button
            onClick={() => navigate(`/detail/${phim.maPhim}`)}
            className="w-full font-semibold transition duration-300 mb-0 bg-gray-300 text-md p-2 shadow hover:bg-color4"
          >
            Xem Chi Tiết
          </button>
        </div>
      </div>
    </div>
  );

  const renderCard = () => (
    <div className="relative  w-full h-[380px] rounded-sm overflow-hidden group">
      {/* Hình ảnh */}
        <img
          src={phim.hinhAnh}
          alt="Phim"
          loading="lazy"
          className="absolute w-full h-full object-fill rounded-sm"
        />
      

      {/* Lớp phủ */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Nút mở */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <button
          className="w-36 h-24 flex items-center justify-center bg-transparent"
          onClick={() => handleOpen(phim)}
        >
          <Lottie animationData={animationPlay} loop={true} />
        </button>
      </div>
    </div>
  );


  const renderFooter = () => (
    <div className="group-hover:hidden h-[60px]  mb-0">
      <div className="text-lg space-x-2 flex items-start justify-start h-[60px] mb-0">
        <span className="text-start text-white font-light overflow-hidden text-ellipsis line-clamp-[2]">
          {phim.tenPhim}
        </span>
      </div>
    </div>
  );

  const renderTicketButton = () => (
    <TicketButton
      onClick={() => navigate(`/detail/${phim.maPhim}`)}
      className="hidden  group-hover:flex h-[60px] w-full font-semibold  bg-color1 hover:transition hover:duration-500 hover:bg-color1/70 mb-0 text-lg py-3 shadow text-white space-x-5 border-y-[3px] justify-center items-center "
    >
      <TagOutlined />
      <span>Mua vé</span>
    </TicketButton>
  )

  return (
    <div className="relative">
      {!isVirtual ? (
        <Popover content={renderContentHover} placement="left"  className="group space-y-2">

            {renderCard()}
            {renderFooter()}
            {renderTicketButton()}

        </Popover>

      ) : (
        <div className="relative group space-y-2 invisible">
          {renderCard()}
          {renderFooter()}
          {renderTicketButton()}

        </div>
      )}
    </div>
  );
};

export default memo(Carditem);

const TicketButton = styled.button`
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  clip-path: polygon(
    0% 25%,
    5% 0%,
    95% 0%,
    100% 25%,
    100% 75%,
    95% 100%,
    5% 100%,
    0% 75%
  );
`;
