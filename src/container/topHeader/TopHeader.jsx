  import React, { useEffect } from "react";
  import ButtonLogo from "../../components/buttonItem/ButtonLogo";
  import ButtonHeader from "../../components/buttonItem/ButtonHeader";
  import "../topHeader/style/style.css";
  import { useSelector } from "react-redux";
  import TitleComponent from "../../components/ui/TitleComponent";
  import PatternedContentBox from "../../components/ui/PatternedContentBox";
  import TicketNow from "../ticketNow/TicketNow";
  import TicketSearch from "../ticketSearch/TicketSearch";
import { useModalContext } from "../../context/Modalcontext";

  export default function TopHeader() {
    const { listPhim } = useSelector((state) => state.quanLyPhimReducer);
    const { handleOpen } = useModalContext();
          
    // 👉 Auto open content when component mounts
    // useEffect(() => { 
    //   handleOpen(contentTicketSearch());
    // }, []);



    const contentTicketBook = () => (
      <div className="home-page h-full w-full flex justify-center items-center">
        <div
          className="w-[800px] h-[600px] bg-[#131313] flex flex-col justify-center items-center p-5"
          onClick={(e) => e.stopPropagation()}
        >
          <PatternedContentBox>
            <div className="w-full h-full space-y-16">
              {TitleComponent("Đặt vé")}
              <TicketNow listPhim={listPhim} />
            </div>
          </PatternedContentBox>
        </div>
      </div>
    );

    const contentTicketSearch = () => (
      <div className="home-page h-full w-full flex justify-center items-center">
        <div
          className="w-[800px] h-[600px] bg-[#131313] flex flex-col justify-center items-center p-5"
          onClick={(e) => e.stopPropagation()}
        >
          <PatternedContentBox>
            <div className="w-full h-full space-y-16">
              {TitleComponent("Tìm kiếm")}
              <TicketSearch listPhim={listPhim} />
            </div>
          </PatternedContentBox>
        </div>
      </div>
    );

    return (
      <div className="Top-header w-full bg-black flex justify-center items-center px-24">
        <ButtonHeader
          contentButton={
            <div className="text-center font-serif font-normal text-sm transition-all duration-300 w-full h-full  hover:text-white">
              Tìm kiếm
            </div>
          }
          handleOpen={handleOpen}
          content={contentTicketSearch()}
        />

        <ButtonLogo />

        <ButtonHeader
          contentButton={
            <div className="text-center font-serif font-normal text-sm transition-all duration-300 w-full h-full text-[#cdcdcd] hover:text-white">
              Đặt vé
            </div>
          }
          handleOpen={handleOpen}
          content={contentTicketBook()}
        />
      </div>
    );
  }
