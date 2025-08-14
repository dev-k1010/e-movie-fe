import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  layDanhSachBanner,
  layDanhSachPhim,
} from "../../stores/quanLyPhimReducer/quanLyPhimReducer";
import { layThongTinLichChieuHeThongRap } from "../../stores/quanLyRapReducer/quanLyRapReducer";
import Banner from "../../container/banner/Banner";
import RapList from "./listRap/RapList";
import AppMobile from "./appMobile/AppMobile";
import MoviesPagination from "../../container/moviesPagination/MoviesPagination";
import MoviesTabs from "../../container/movieTabs/MoviesTabs";
import { useHeightContext } from "../../context/HeightHeaderContext";
import { SliderProvider } from "../../context/SliderContext";
import BorderedContainer from "../../components/ui/BorderedContainer";
import PromoBanner from "../../container/promoBanner/PromoBanner";
import ProgramEvents from "../../container/programEvents/ProgramEvents";
import FilmNews from "../../container/filmNews/FilmNews";
import TitleComponent from "../../components/ui/TitleComponent";
import SeparatorLine from "../../components/ui/SeparatorLine";
import TicketSearch from "../../container/ticketSearch/TicketSearch";

export default function Home() {
  const dispatch = useDispatch();
  const { listBanner, listPhim } = useSelector(
    (state) => state.quanLyPhimReducer
  );
  const { lichChieuHeThongRap } = useSelector(
    (state) => state.quanLyRapReducer
  );
  const { heightHeader } = useHeightContext();

  useEffect(() => {
    dispatch(layDanhSachBanner());
    dispatch(layDanhSachPhim());
    dispatch(layThongTinLichChieuHeThongRap());
  }, [dispatch]);

  const [backgroundY, setBackgroundY] = useState(100); // Vị trí ban đầu của nền
  const [backgroundOpacity, setBackgroundOpacity] = useState(0); // Độ mờ ban đầu

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Vị trí cuộn hiện tại
      const windowHeight = window.innerHeight; // Chiều cao cửa sổ trình duyệt
      const component = document.getElementById("danhSachPhim");
      const componentTop = component.offsetTop; // Vị trí top của component so với trang

      // Tính toán tỷ lệ cuộn của component
      const scrollPercentage = Math.min(
        1,
        Math.max(
          0,
          (scrollPosition + windowHeight - componentTop) / (windowHeight * 3)
        ) // Tăng độ mượt khi cuộn
      );
      // Cập nhật vị trí Y cho nền (chậm hơn so với nội dung)
      const newY = Math.max(0, 100 - scrollPercentage * 100 * 5); // Nền di chuyển chậm hơn chút
      const newOpacity = Math.min(1, scrollPercentage * 5); // Nền mờ dần mượt mà

      setBackgroundY(newY); // Cập nhật vị trí Y của nền
      setBackgroundOpacity(newOpacity); // Cập nhật độ mờ
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        paddingTop: `${heightHeader}px`,
        backgroundColor: "black",
      }}
      className="home-page"
    >
      {/* Banner */}
      <SliderProvider>
        <Banner listBanner={listBanner} />
      </SliderProvider>

      {/* Lịch chiếu phim */}
      <div id="lichChieuPhim">
        <div className="w-full h-20 bg-transparent rounded-tl-[50%] rounded-tr-[50%] border-b-0 bg-gradient-to-l from-transparent via-color1 to-transparent pt-1">
          <div
            style={{ borderRadius: "inherit" }}
            className="w-full h-full bg-gradient-to-b from-[#252525] via-black to-black"
          ></div>
        </div>

        {TitleComponent("Lịch chiếu")}

        <div className="px-24 pt-5 pb-10">
          <div className="p-5 bg-[#131313]">
            <BorderedContainer>
              <div className="px-16">
                <MoviesTabs listPhim={listPhim} />
              </div>
            </BorderedContainer>
          </div>
        </div>
      </div>

      {/* Danh sách phim */}
      <div id="danhSachPhim">
        {SeparatorLine()}
        {TitleComponent("Phim")}

        <div
          style={{
            backgroundImage: `url("/IMG/bg-19.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="w-full h-full px-24 py-10"
            style={{
              background: `
            linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 10%),
            linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 10%),
            linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0) 20%),
            linear-gradient(to left, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0) 20%)
          `,
            }}
          >
            <div
              className="w-full p-5 bg-[#131313]"
              style={{
                /* Hiệu ứng di chuyển dọc và mờ dần */
                transform: `translateY(${backgroundY}%)`,
                opacity: backgroundOpacity,
                /* Tối ưu hóa hiệu ứng chuyển động */
                transition: `
              transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1),
              opacity 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)
            `,
              }}
            >
              <BorderedContainer>
                <div className="px-16">
                  <MoviesPagination listPhim={listPhim} />
                </div>
              </BorderedContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Danh sách rạp */}
      <div id="cumRap">
        {SeparatorLine()}
        {TitleComponent("Cụm rạp")}

        <div className="px-24 pt-5 pb-10 bg-black">
          <div className="p-5 bg-[#131313]">
            <BorderedContainer>
              <RapList lichChieuHeThongRap={lichChieuHeThongRap} />
            </BorderedContainer>
          </div>
        </div>
      </div>

      {/* Sự kiện */}
      <div id="suKien">
        {SeparatorLine()}
        {TitleComponent("Sự kiện")}

        <div className="px-24 pt-5 pb-10">
          <ProgramEvents />
        </div>
      </div>

      {/* Tin tức */}
      <div id="tinTuc">
        {SeparatorLine()}
        {TitleComponent("Tin tức")}

        <div className="px-24 pt-5 pb-10 bg-black">
          <FilmNews />
        </div>
      </div>

      {/* Khuyến mãi */}
      <div id="khuyenMai">
        {SeparatorLine()}
        {TitleComponent("Khuyến mãi")}

        <div className="px-24 pt-5 pb-10 bg-black">
          <PromoBanner />
        </div>
      </div>

      {/* App */}
      <div
        id="appMobile"
        className="px-24 pt-5 pb-10"
        style={{
          backgroundImage: `url('IMG/bg-1.jpg')`,
          backgroundRepeat: "repeat",
        }}
      >
        <AppMobile />
      </div>  

    
    </div>
  );
}
