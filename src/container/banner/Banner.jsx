import React, { memo, useCallback, useMemo } from "react";
import Slider from "react-slick";
import useURLChange from "../../hooks/use_url_change/useURLChange";
import "../banner/style/style.css";
import { bannerSettings } from "../../constants/settingSlider/settingSlider";
import { useSliderContext } from "../../context/SliderContext";
import FadeIn from "../../components/fadeIn/FadeIn";
import ButtonTicket from "../../components/buttonItem/buttonTicket/ButtonTicket";
import { useModalContext } from "../../context/Modalcontext";



const trailerItems = [
  { trailer: "kBY2k3G6LsM&t=4s" },
  { trailer: "kBY2k3G6LsM&t=4s" },
  { trailer: "kBY2k3G6LsM&t=4s" },
  { trailer: "kBY2k3G6LsM&t=4s" },
  { trailer: "kBY2k3G6LsM&t=4s" },
  { trailer: "kBY2k3G6LsM&t=4s" },
];

const listBanner = [
  {
    hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/ban-tay-diet-quy.png",
    maBanner: 1,
    maPhim: 1282,
    tenPhim: "Bàn Tay Diệt Quỷ",
  },
  {

    hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h.png",
    maBanner: 2,
    maPhim: 1283,
    tenPhim: "Lặt Mặt 48h"
  },
  {
    hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/cuoc-chien-sinh-tu.png",
    maBanner: 3,
    maPhim: 1284,
    tenPhim: "Cuộc Chiến Sinh Tử"
  },
  {
    hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/ban-tay-diet-quy.png",
    maBanner: 4,
    maPhim: 1282,
    tenPhim: "Bàn Tay Diệt Quỷ"
  },
  {

    hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h.png",
    maBanner: 5,
    maPhim: 1283,
    tenPhim: "Lặt Mặt 48h"
  },
  {
    hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/cuoc-chien-sinh-tu.png",
    maBanner: 6,
    maPhim: 1284,
    tenPhim: "Cuộc Chiến Sinh Tử"
  }
]


const useImageClass = (isVisible) =>
  useMemo(() => (
    `transition-transform duration-700 ease-in-out ${isVisible ? 'scale-[1.1]' : 'scale-[1]'}`
  ), [isVisible]);


// function Banner({ listBanner }) {
function Banner() {

  const isVisible = useURLChange();
  const { handleOpen } = useModalContext();
  const imageClass = useImageClass(isVisible);



  /**
   * Hàm render từng item của slider.
   * 
   * @param {Object} banner - Đối tượng banner chứa thông tin hình ảnh và trailer.
   * @param {number} index - Chỉ số của banner trong danh sách.
   * @returns {JSX.Element} - Phần tử JSX đại diện cho một banner.
   */
  const renderBannerItem = useCallback((banner, index) => (

    <div className=" w-[80%] h-[250px] lg:h-[80vh]">
      <div
        key={banner.maBanner}
        className="w-full h-full flex justify-center items-center"
        style={{
          backgroundImage: `url(${banner.hinhAnh})`, // Sử dụng backgroundImage
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // Đảm bảo ảnh bao phủ toàn bộ div
          backgroundPosition: "center", // Đặt ảnh ở giữa
        }}
      >
        {/* Nút bấm */}

        <div className=" banner-button flex flex-col justify-center items-center overflow-hidden space-y-[3vh]"
          style={{ zIndex: 1 }}

        >
          <div className=' w-[20vh] h-[3vh] grid grid-cols-12 items-end justify-center relative '>
            {/* Đường kẻ ngang trái */}
            <span className="col-span-5 w-full flex justify-end items-center">
              <span className="border border-white w-[50%] "></span>
            </span>
            {/* Hình thoi trái */}
            <span className="col-span-1 relative flex items-center justify-center w-full aspect-square">
              <span className="border-2 border-white w-[80.7%] h-[80.7%] transform translate-y-1/2 rotate-45"></span>
            </span>
            {/* Đường kẻ giữa */}
            <span className="border col-span-1 border-white h-full absolute top-0 left-1/2 transform -translate-x-1/2  bg-black bottom-0"></span>
            {/* Hình thoi phải */}
            <span className="col-span-1 relative flex items-center justify-center w-full aspect-square">
              <span className="border-2 border-white w-[80.7%] h-[80.7%] transform translate-y-1/2 rotate-45"></span>
            </span>
            {/* Đường kẻ ngang phải */}
            <span className="col-span-5 w-full flex justify-start items-center">
              <span className="border border-white w-[50%] "></span>
            </span>
          </div>
          <span className="space-y-3 group">
            <h1
              className="text-white text-4xl font-serif font-normal">{banner.tenPhim}</h1>
            <div className="bg-color1 h-[0.5px] w-full transition duration-500 scale-x-0 group-hover:scale-x-100 block "></div>
          </span>
          <ButtonTicket />
          {/* <button
            className="w-[18vh] flex justify-center items-center transition duration-500 bg-color1 hover:bg-[#131313] rounded-full py-2 space-x-3 text-white"
            onClick={() =>
              handleOpen(`https://www.youtube.com/watch?v=${trailerItems[index].trailer}`)
            }
          >
            <PlayCircleOutlined className="text-xl " />
            <h1
              className=" text-lg font-sans font-normal">Trailer</h1>
          </button> */}
          {/* <button
            className="w-[120px] h-[40px] text-sm font-sans font-normal transition duration-300 rounded-full space-x-3 text-white border hover:border-[#131313] hover:bg-[#131313]"
            // onClick={(e) => {
            //   e.stopPropagation();
            //   handleOpen(movie.trailer);
            // }}
          >
            <span>Trailer</span>
            <PlayCircleOutlined className="text-lg" />
          </button> */}

          <div className='w-[20vh] h-[3vh] grid grid-cols-12  relative items-start justify-center'>
            {/* Đường kẻ ngang trái */}
            <span className="col-span-5 w-full flex justify-end items-center">
              <span className="border border-white w-[50%]"></span>
            </span>
            {/* Hình thoi trái */}
            <span className="col-span-1 relative flex items-center justify-center w-full aspect-square">
              <span className="border-2 border-white w-[80.7%] h-[80.7%] transform -translate-y-1/2 rotate-45"></span>
            </span>
            {/* Đường kẻ giữa */}
            <span className="border col-span-1 border-white h-full absolute top-0 left-1/2 transform -translate-x-1/2 bg-black"></span>
            {/* Hình thoi phải */}
            <span className="col-span-1 relative flex items-center justify-center w-full aspect-square">
              <span className="border-2 border-white w-[80.7%] h-[80.7%] transform -translate-y-1/2 rotate-45"></span>
            </span>
            {/* Đường kẻ ngang phải */}
            <span className="col-span-5 w-full flex justify-start items-center">
              <span className="border border-white w-[50%] "></span>
            </span>
          </div>
        </div>
      </div>
    </div>

  ), [imageClass, handleOpen]);


  const { currentSlider, setCurrentSlider } = useSliderContext();
  const handleAfterChange = (current) => {
    setCurrentSlider(current);
  };
  const settings = bannerSettings(currentSlider, handleAfterChange)

  return (
    <>
      <div
        className="Banner relative z-0 overflow-hidden flex justify-center items-center">
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0) 20%),
              linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 10%),
              linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 30%),
              linear-gradient(to left, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 30%)
            `,
          }}
        ></div>


        <FadeIn />

        {/* <div className="w-[calc(13%)] h-[90vh] "

        >

          <img src="/IMG/bg-banner-left.jpg" alt="" className="w-full h-full " />

        </div> */}
        <div className="w-[calc(100%)] h-[100vh] px-24 pt-10">

          <Slider {...settings}>

            {listBanner.map(renderBannerItem)}

          </Slider>

        </div>
        {/* <div className="w-[calc(13%)] h-[90vh] ">

          <img src="/IMG/bg-banner-right.jpg" alt="" className="w-full h-full" />
        </div> */}
      </div>


    </>
  );
}

export default memo(Banner);
