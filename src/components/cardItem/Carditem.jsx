import React, { memo } from "react";
import { TagOutlined } from "@ant-design/icons";
import styled from "styled-components";
import FadeIn from "../fadeIn/FadeIn";
import LottieAnimation from "../lottieAnimation/LottieAnimation";


const CardItem = ({ movie, navigate, handleOpen, isVirtual }) => {

  const imageCard = () => (

    <div className="relative rounded-md overflow-hidden group">
      {/* Hiệu ứng FadeIn */}
      <FadeIn />

      {/* Hình ảnh */}
      <img
        src={movie.hinhAnh}
        alt={movie.tenPhim}
        loading="lazy"
        className="w-full h-[18vw] object-cover rounded-md text-white "
      />

      {/* Lớp phủ */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Nút mở trailer */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <button
          className="w-24 h-16 flex items-center justify-center bg-transparent"
          onClick={(e) => {
            e.stopPropagation();
            handleOpen(movie.trailer);
          }}
        >
          <LottieAnimation nameAnimation="buttonYoutube" />
        </button>
      </div>
    </div>


  );

  const footerCard = () => (
    <div className="group-hover:hidden h-[3vw] mb-0">
      <div className="text-md space-x-2 flex items-start justify-start h-full mb-0">
        <span className="text-start text-white font-light overflow-hidden text-ellipsis line-clamp-[2]">
          {movie.tenPhim}
        </span>
      </div>
    </div>
  );

  const ticketButton = () => (
    <div
      onClick={() => navigate(`/detail/${movie.maPhim}`)}
      className="hidden group-hover:flex h-[3vw] w-full font-semibold  bg-color1 hover:transition hover:duration-500 hover:bg-color1/70 text-lg py-3 shadow text-white space-x-5 border-dashed border-y-[3px] justify-center items-center "
    >
      <TagOutlined />
      <span>Mua vé</span>
    </div>
  )

  return (<>

    <div
      onClick={() => navigate(`/detail/${movie.maPhim}`)}
      className=" overflow-hidden p-1 pb-2 group space-y-1"
    >

      {!isVirtual ? (
        <>
          {imageCard()}
          {footerCard()}
          {ticketButton()}
        </>
      ) : (
        <div className="invisible space-y-1">
          {imageCard()}
          {footerCard()}
          {ticketButton()}
        </div>
      )}
    </div>
  </>
  );
};

export default memo(CardItem);



