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

  const titleContent = (title) => (
    <div className="w-full flex flex-col justify-center items-center space-y-2">
      <p className="text-white text-xl font-normal uppercase">{title}</p>
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

  return (

    <div className="hidden md:block lg:block">
      <div className=" shadow-md w-full">
        <StyledTabs

          tabPosition={position}
          style={{ height: '500px' }}

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
              <StyledTabs
                tabPosition={position}
                style={{ height: '500px' }}

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
                        <p className="whitespace-normal m-0 text-color1 text-left">
                          {cumRap.diaChi}
                        </p>
                      </div>
                    </div>

                  ),
                  children: (
                    <div className="overflow-y-auto h-[500px] bg-black space-y-5 p-5" >

                      {cumRap.danhSachPhim.map((phim, i) => (
                        <div className="item" style={{ '--i': i + 1 }} key={i}>

                          <div className="px-3 py-2 space-y-5 bg-[#131313]">
                            <BorderContent>
                              <div className=" p-3">

                                <div className="relative  overflow-hidden">

                                  <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{
                                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${phim.hinhAnh})`,
                                    }}
                                  />

                                  <div
                                    className="absolute inset-0 backdrop-blur-sm"
                                    style={{
                                      zIndex: 1, // Đảm bảo lớp phủ nằm trên nền
                                    }}
                                  ></div>

                                  <div className="relative z-10 flex p-5">
                                    <img
                                      src={phim.hinhAnh}
                                      alt={phim.tenPhim}
                                      loading="lazy"
                                      className="h-36 w-24"
                                      style={{
                                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 1)",
                                      }}
                                    />

                                    <div className=" flex-1 pl-5 space-y-5">

                                      {titleContent(phim.tenPhim)}



                                      <div className="space-y-5 overflow-y-auto w-full h-[200px] pr-2">
                                        <div className="grid grid-cols-3 gap-2">
                                          {phim.lstLichChieuTheoPhim.slice(0, 12).map((lichChieu, i) => (
                                            <div className="">
                                              <button
                                                key={i}
                                                onClick={() => {
                                                  localStorage.getItem(UserLogin)
                                                    ? navigate(`/ticket/${lichChieu.maLichChieu}`)
                                                    : navigate("/user/login");
                                                }}
                                                style={{
                                                  boxShadow: "0px 4px 2px rgba(0, 0, 0, 0.4)",
                                                }}
                                                className="w-full text-start p-2 rounded-md font-sans font-medium transition duration-300 bg-[#252525] flex justify-center items-center text-xs discover-button "
                                              >


                                                <span className="text-gray-50 ">
                                                  {moment(lichChieu.ngayChieuGioChieu).format("DD-MM-YYYY")} -
                                                </span>
                                                <span className="text-color1 ">
                                                  {moment(lichChieu.ngayChieuGioChieu).format("hh:mm")}
                                                </span>

                                                <span className="bg-transition"></span>
                                              </button>
                                            </div>
                                          ))}
                                        </div>
                                      </div>

                                    </div>

                                  </div>
                                </div>

                              </div>
                            </BorderContent>
                          </div>

                        </div>

                      ))}

                    </div>
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
const StyledTabs = styled(Tabs)`

    .ant-tabs-tab-active {
      background-color: #252525 !important; /* Đổi màu nền của tab active */
    }

    .ant-tabs-ink-bar {
      width: 0px !important;
      background: #9ca3af !important; /* Đổi màu của thanh underline (thanh di chuyển dưới tab) */
    }

   .ant-tabs-nav::before {
      border-bottom: 1px #131313 solid !important;
    } 

  `;