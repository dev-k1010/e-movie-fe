import React, { memo } from "react";
import { TagOutlined } from "@ant-design/icons";
import styled from "styled-components";
import FadeIn from "../fadeIn/FadeIn";
import LottieAnimation from "../lottieAnimation/LottieAnimation";


const Carditem = ({ movie, navigate, handleOpen, isVirtual }) => {

  const imageCard = () => (
    <>
      <div className="rounded-md overflow-hidden w-full h-[430px] relative group mb-2"
      >
        {/* Hiệu ứng FadeIn */}
        <FadeIn />

        <img
          src={movie.hinhAnh}
          alt="Phim"
          loading="lazy"
          className="w-full h-full object-fill rounded-md"
        />

        {/* Lớp phủ */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Nút mở trailer*/}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <button
            className="w-28 h-16 flex items-center justify-center bg-transparent"
            onClick={(e) => {
              e.stopPropagation(); // Ngăn chặn sự kiện onClick của nút mở ảnh hưởng đến card
              handleOpen(movie);
            }}
          >
            <LottieAnimation nameAnimation="buttonYoutube" />
          </button>
        </div>
      </div>
    </>
  );

  const footerCard = () => (
    <div className="group-hover:hidden h-[60px]  mb-0">
      <div className="text-lg space-x-2 flex items-start justify-start h-[60px] mb-0">
        <span className="text-start text-white font-light overflow-hidden text-ellipsis line-clamp-[2]">
          {movie.tenPhim}
        </span>
      </div>
    </div>
  );

  const ticketButton = () => (
    <TicketButton
      onClick={() => navigate(`/detail/${movie.maPhim}`)}
      className="hidden group-hover:flex h-[60px] w-full font-semibold  bg-color1 hover:transition hover:duration-500 hover:bg-color1/70 mb-0 text-lg py-3 shadow text-white space-x-5 border-y-[3px] justify-center items-center "
    >
      <TagOutlined />
      <span>Mua vé</span>
    </TicketButton>
  )

  return (
    <div
      onClick={() => navigate(`/detail/${movie.maPhim}`)} className=" group " >

      {!isVirtual ? (
        <>
          {imageCard()}
          {footerCard()}
          {ticketButton()}

        </>
      ) : (
        <div className="relative group space-y-2 invisible">
          {imageCard()}
          {footerCard()}
          {ticketButton()}

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
