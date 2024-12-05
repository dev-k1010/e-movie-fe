import { Tabs } from "antd";
import moment from "moment";
import React, { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserLogin } from "../../../config/api";
import styled from "styled-components";
import PatternedContentBox from "../../../components/ui/PatternedContentBox";
import BorderSquareLine from "../../../components/ui/BorderSquareLine";
import BorderedContainer from "../../../components/ui/BorderedContainer";
import BorderContent from "../../../components/ui/BorderContent";

import "../listRap/style/style.css";
import BorderWrapper from "../../../components/ui/BorderWrapper";

function RapList(props) {
  const navigate = useNavigate();
  const [position, setPosition] = useState("left");
  const { lichChieuHeThongRap } = props;

  const [activeKeyParent, setActiveKeyParent] = useState(0); // Trạng thái cho tab cha
  const [activeKeyChild, setActiveKeyChild] = useState(0); // Trạng thái cho tab con

  const handleParentTabChange = (key) => {
    setActiveKeyParent(key);
    setActiveKeyChild(0); // Reset lại tab con khi đổi tab cha
  };

  const handleChildTabChange = (key) => {
    setActiveKeyChild(key);
  };

  window.onresize = () => {
    if (window.innerWidth <= 1024) {
      setPosition("top");
    } else {
      setPosition("left");
    }
  };

  const lineDemo = () => (
    <div className="w-full h-full grid grid-cols-17 gap-3 justify-center items-center">

      <div className="col-span-8 w-full h-[0.5px] flex justify-end items-center ">
        <div className="w-[50%] h-full bg-[#555555] "></div>
      </div>

      <span className="col-span-1 w-full h-full flex justify-center items-center">
        <span className="w-5 aspect-square scale-[0.5] grid grid-cols-2 grid-rows-2 gap-1 rotate-45 ">

          <span className="bg-[#555555]  w-full h-full"></span>
          <span className="bg-[#555555]  w-full h-full"></span>
          <span className="bg-[#555555]  w-full h-full"></span>
          <span className="bg-[#555555]  w-full h-full"></span>
        </span>
      </span>

      <span className="col-span-8 w-full h-[0.5px] flex justify-start items-center">
        <div className="w-[50%] h-full bg-[#555555] "></div>
      </span>
    </div>
  )

  const titleContent = (title) => (
    <div className="w-full flex flex-col justify-center items-center space-y-1">
      <p className="text-[#cdcdcd] text-lg font-serif font-medium uppercase">{title}</p>
      {lineDemo()}
    </div>
  )



  return (

    <div className="hidden md:block lg:block rap-list">
      <div className=" shadow-md w-full">
        <Tabs

          tabPosition={position}
          style={{ height: '490px' }}

          activeKey={activeKeyParent} // Sử dụng activeKey cho tab cha
          onChange={handleParentTabChange} // Xử lý thay đổi tab cha

          items={lichChieuHeThongRap.map((heThongRap, i) => ({
            key: i,
            label: (
              <div className="logo-container w-32 flex justify-center items-center ">
                <img
                  src={heThongRap.logo}
                  alt={heThongRap.tenHeThongRap}
                  className="logo w-14"
                  loading="lazy"
                />
              </div>
            ),
            children: (
              <Tabs
                tabPosition={position}
                style={{ height: '490px' }}

                activeKey={activeKeyChild} // Sử dụng activeKey cho tab con
                onChange={handleChildTabChange} // Xử lý thay đổi tab con

                items={heThongRap.lstCumRap.map((cumRap, i) => ({
                  key: i,
                  label: (


                    <div className="item" style={{ '--i': i + 1 }} key={i}>
                      <div className="w-56 flex items-start justify-start space-x-3">
                        <img
                          src={cumRap.hinhAnh}
                          alt={cumRap.tenCumRap}
                          className="w-14"
                          loading="lazy"
                        />
                        <p className="whitespace-normal m-0 text-[#dddddd] text-left">
                          {cumRap.diaChi}
                        </p>
                      </div>
                    </div>

                  ),
                  children: (

                    <div className="overflow-y-auto h-[490px]" >

                      {cumRap.danhSachPhim.map((phim, i) => (
                        <div className="item pr-3 pb-3 bg-[#131313] group" style={{ '--i': i + 1 }} key={i}>


                          {/* <BorderContent> */}


                          <div className="relative">

                            <div
                              className="absolute inset-0 bg-cover bg-center "
                            />

                            <div
                              className="absolute h-full w-full backdrop-blur"
                              style={{
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0,
                                zIndex: 1, // Đảm bảo lớp phủ nằm trên nền
                              }}
                            ></div>

                            {/* Nội dung */}
                            <div className="relative z-10 p-5 grid grid-rows-8 transition duration-300 ease-in  group-hover:bg-[#252525] border border-[#252525]">
                              <div className="row-span-2">
                                {titleContent(phim.tenPhim)}
                              </div>

                              <div className="flex row-span-6 h-[180px]">
                                <img
                                  src={phim.hinhAnh}
                                  alt={phim.tenPhim}
                                  loading="lazy"
                                  className="w-32 rounded-md"
                                  style={{
                                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                                  }}
                                />
                                <div className="flex-1">
                                  <div className="overflow-y-auto w-full h-full px-3 pb-1">
                                    <div className="grid grid-cols-3 gap-[10px]">
                                      {phim.lstLichChieuTheoPhim.slice(0, 12).map((lichChieu, i) => (



                                        <button
                                          key={i}
                                          onClick={() => {
                                            localStorage.getItem(UserLogin)
                                              ? navigate(`/ticket/${lichChieu.maLichChieu}`)
                                              : navigate("/user/login");
                                          }}
                                          style={{
                                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)",
                                          }}
                                          className="w-full h-9 rounded-md text-xs font-sans font-medium flex justify-center items-center discover-button "
                                        >
                                          <div className="text-default space-x-2">
                                            <span className="text-[#cdcdcd] ">
                                              {moment(lichChieu.ngayChieuGioChieu).format("DD-MM-YYYY")}</span>
                                            <span className="text-color1 ">
                                              {moment(lichChieu.ngayChieuGioChieu).format("hh:mm")}
                                            </span>
                                          </div>
                                          <div className="text-hover space-x-2">
                                            <span className="text-[#cdcdcd]">
                                              {moment(lichChieu.ngayChieuGioChieu).format("DD-MM-YYYY")}</span>
                                            <span className="text-color4">
                                              {moment(lichChieu.ngayChieuGioChieu).format("hh:mm")}
                                            </span>
                                          </div>
                                        </button>

                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>


                          {/* </BorderContent> */}
                        </div>


                      ))
                      }
                    </div >

                  ),
                }))}
              />
            ),
          }))}
        />
      </div >
    </div >

  );
}
export default memo(RapList);
