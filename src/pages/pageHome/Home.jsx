import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  layDanhSachBanner,
  layDanhSachPhim,
} from "../../stores/quanLyPhimReducer/quanLyPhimReducer";
import { layThongTinLichChieuHeThongRap } from "../../stores/quanLyRapReducer/quanLyRapReducer";
import Banner from "../../container/banner/Banner";
import RapList from "./listRap/RapList";
import HomeTool from "./homeTool/HomeTool";
import News from "./news/News";
import AppMobile from "./appMobile/AppMobile";
import MoviesPagination from "../../container/moviesPagination/MoviesPagination";
import MoviesTabs from "../../container/movieTabs/MoviesTabs";
import { useOutletContext } from "react-router-dom";
import { ExclamationOutlined } from "@ant-design/icons";
// import FadeIn from "../../components/fadeIn/FadeIn";
import { useHeightContext } from "../../context/HeightHeaderContext";
import { SliderProvider } from "../../context/SliderContext";
import BorderWrapper from "../../components/ui/BorderWrapper";
import BorderedContainer from "../../components/ui/BorderedContainer";
import BorderSquareLine from "../../components/ui/BorderSquareLine";
import PatternedContentBox from "../../components/ui/PatternedContentBox";
import PromoSlider from "../../components/promoSlider/PromoSlider";
import TextSwipper from "../../components/textSwipper/TextSwipper";


export default function Home() {
  const dispatch = useDispatch();
  const { listBanner, listPhim } = useSelector((state) => state.quanLyPhimReducer);
  const { lichChieuHeThongRap } = useSelector((state) => state.quanLyRapReducer);
  const { heightHeader } = useHeightContext();

  useEffect(() => {
    dispatch(layDanhSachBanner());
    dispatch(layDanhSachPhim());
    dispatch(layThongTinLichChieuHeThongRap());
  }, [dispatch]);

  const titleContent = (title) => (
    <div className="w-full h-full flex flex-col justify-center items-center space-y-2 z-10">
      <p className="text-white text-3xl font-normal uppercase">{title}</p>
      <div className="w-full h-full grid grid-cols-17 gap-2 justify-center items-center">
        <span className="col-span-8 w-full h-[1px] flex justify-end items-center">
          <div className="w-full h-full bg-[#555555] "></div>
        </span>
        <span className="col-span-1 w-full h-full flex justify-center items-center">
          <span className="border border-white w-[20%] aspect-square rotate-45 scale-[0.5] bg-[#555555]"></span>
        </span>
        <span className="col-span-8 w-full h-[1px] flex justify-start items-center">
          <div className="w-full h-full bg-[#555555] "></div>
        </span>
      </div>
    </div>
  )


  const [backgroundY, setBackgroundY] = useState(100); // Vị trí ban đầu của nền
  const [backgroundOpacity, setBackgroundOpacity] = useState(0); // Độ mờ ban đầu

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Vị trí cuộn hiện tại
      const windowHeight = window.innerHeight; // Chiều cao cửa sổ trình duyệt
      const component = document.getElementById('danhSachPhim');
      const componentTop = component.offsetTop; // Vị trí top của component so với trang

      // Tính toán tỷ lệ cuộn của component
      const scrollPercentage = Math.min(
        1,
        Math.max(0, (scrollPosition + windowHeight - componentTop) / (windowHeight * 1.5)) // Tăng độ mượt khi cuộn
      );
      // Cập nhật vị trí Y cho nền (chậm hơn so với nội dung)
      const newY = Math.max(0, 100 - (scrollPercentage * 100 * 2)); // Nền di chuyển chậm hơn chút
      const newOpacity = Math.min(1, scrollPercentage * 1.8); // Nền mờ dần mượt mà

      setBackgroundY(newY); // Cập nhật vị trí Y của nền
      setBackgroundOpacity(newOpacity); // Cập nhật độ mờ
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);







  return (
    <div
      style={{
        paddingTop: `${heightHeader}px`,
        backgroundColor: "black"
      }}
    >

      {/* Banner */}
      <SliderProvider >

        <Banner listBanner={listBanner} />

      </SliderProvider>

      {/* Line */}
      <div
        className="w-full h-20 bg-transparent rounded-tl-[50%] rounded-tr-[50%] border-b-0 bg-gradient-to-l from-transparent via-color1 to-transparent pt-1">
        <div
          style={{ borderRadius: 'inherit' }}
          className="w-full h-full bg-gradient-to-b from-[#252525] via-black to-black"></div>
      </div>

      {/* Lịch chiếu phim */}
      <div className=" px-5 md:px-16 lg:px-28 space-y-9 w-full h-full bg-black pb-10 ">


        <div id="lichChieuPhim" className=" bg-black ">


          <BorderSquareLine>
            <div className="px-20 py-3 space-y-5 bg-[#131313]">
              <BorderedContainer>
                <div className=" py-5 px-10">
                  <MoviesTabs listPhim={listPhim} />
                </div>
              </BorderedContainer>
            </div>

          </BorderSquareLine>


        </div>

      </div>


      {/* Danh sách phim */}
      <div
        id="danhSachPhim" className="pt-10 px-28 space-y-5 bg-black overflow-hidden flex flex-col justify-center items-center relative ">

        {/* Background */}
        <div
          id="background"
          className="absolute z-0 w-full h-full "
          style={{
            backgroundImage: `url("/IMG/bg-34.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${backgroundY}%)`,
            opacity: backgroundOpacity,
            transition: "transform 0.9s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.9s cubic-bezier(0.25, 0.1, 0.25, 1)", // Mượt mà hơn
          }}
        >
          <div className="absolute inset-0 backdrop-blur-sm "></div>
          <img src="/IMG/bg-34.jpg" className="h-full w-full" alt="" />
        </div>



        {/* Title */}
        <div className="z-10 w-full">
          {titleContent("Danh sách phim")}

          {/* List Movies */}
          <div >
            <div className="px-[160px] py-[72px]" >
              <MoviesPagination listPhim={listPhim} titleContent={titleContent} />
            </div>

          </div>


        </div>

      </div>

      {/* Gradient overlay  */}
      <div className="w-full h-20 -translate-y-16 bg-gradient-to-t from-black via-black/50 to-transparent"></div>


      {/* Demo promo */}
      <div className="w-full h-full py-[72px] px-28 space-y-5">
        {titleContent("khuyến mãi")}
        <TextSwipper />

      </div>

      {/* Danh sách rạp */}
      <div
        id="rapChieu" className="mt-10 px-28 bg-black space-y-5">


        {titleContent("danh sách rạp")}

        <BorderSquareLine>


          <div className="p-5 space-y-5 bg-[#131313]">

            <RapList lichChieuHeThongRap={lichChieuHeThongRap} />

          </div>


        </BorderSquareLine>
      </div>



      <div id="tinTuc" className="mt-10 px-28 bg-black space-y-5">
        <News />
      </div>

      <div id="appMobile" className="px-5 md:px-16 lg:px-28">
        <AppMobile />
      </div>

    </div >
  );
}




