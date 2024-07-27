import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  layDanhSachBanner,
  layDanhSachPhim,
} from "../../stores/quanLyPhimReducer/quanLyPhimReducer";
import { layThongTinLichChieuHeThongRap } from "../../stores/quanLyRapReducer/quanLyRapReducer";
import Banner from "./banner/Banner";
import MovieList from "./listPhim/MovieList";
import RapList from "./listRap/RapList";
import HomeTool from "./homeTool/HomeTool";
import ListPhanTrang from "./listPhimPagination/ListPhanTrang";
import News from "./news/News";
import AppMobile from "./appMobile/AppMobile";


export default function Home() {
  const dispatch = useDispatch();
  const { listBanner, listPhim } = useSelector(
    (state) => state.quanLyPhimReducer
  );
  const { lichChieuHeThongRap } = useSelector(
    (state) => state.quanLyRapReducer
  );

  useEffect(() => {
    dispatch(layDanhSachBanner());
    dispatch(layDanhSachPhim());
    dispatch(layThongTinLichChieuHeThongRap());
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url( 'IMG/bg-1.jpg')`,
      }}>
      <div
        className="pt-[110px] bg-gradient-to-b from-black to-white/5"

      >
        <div className="">
          <Banner listBanner={listBanner} />
        </div>
        <div className="px-5 md:px-16 lg:px-28 space-y-12">
          <div className="shadow-lg shadow-color1 lg:-translate-y-[33px]">
            <HomeTool listPhim={listPhim} />
          </div>
          <div id="lichChieuPhim">
            <MovieList listPhim={listPhim} />
          </div>
          <div id="danhSachPhim">
            <ListPhanTrang listPhim={listPhim} />
          </div>
          <div id="rapChieu">
            <RapList lichChieuHeThongRap={lichChieuHeThongRap} />
          </div>
          <div id="tinTuc">
            <News />
          </div>
          <div id="appMobile" >
            < AppMobile />
          </div>
        </div>
      </div>
    </div>
  );
}
