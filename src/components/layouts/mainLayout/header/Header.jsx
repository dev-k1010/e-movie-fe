import React, { memo, useEffect, useRef, useState } from "react";
import debounce from "lodash/debounce";
import { useHeightContext } from "../../../../context/HeightHeaderContext";
import TopHeader from "../../../../container/topHeader/TopHeader";
import BottomHeader from "../../../../container/bottomHeader/BottomHeader";
import { BarsOutlined } from "@ant-design/icons";


function Header() {
  const navbarRef = useRef(null);
  const { setHeightHeader } = useHeightContext();
  const [scrollY, setScrollY] = useState(0);
  const [hideNavbar, setHideNavbar] = useState(false);


  const handleScroll = debounce(() => {

    const currentScrollY = window.scrollY;

    if (currentScrollY > scrollY) {
      // Cuộn xuống, ẩn navbar
      setHideNavbar(true);
    }
    else {
      // Cuộn xuống, ẩn navbar
      setHideNavbar(false);
    }
    // Cập nhật giá trị cuộn hiện tại
    setScrollY(currentScrollY);
  }, 100);


  useEffect(() => {

    const rect = navbarRef.current.getBoundingClientRect();
    setHeightHeader(rect.height);


  }, []);


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  const handleClick = () => setHideNavbar(!hideNavbar)


  return (
    <div ref={navbarRef} className="fixed z-50 w-full">
      
      <div className="w-full h-full bg-black py-5 border-b border-[#252525]">

        <TopHeader />

      </div>

      <div className="w-full h-full overflow-hidden">

        <div className="relative">
          {/* Lớp phủ mờ màu đen */}
          <div
            className={`fixed top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 pointer-events-none z-40`}
            style={{
              backdropFilter: "blur(4px)", // Hiệu ứng mờ nền
            }}
            id="overlay"
          ></div>

          {/* Nút bấm */}
          <button
            onClick={handleClick}
            className={`bg-color1 w-14 h-14 fixed transition-all duration-300 flex justify-center items-center rounded-full origin-right hover:shadow-lg z-50 ${hideNavbar ? 'opacity-100 ' : 'opacity-0 pointer-events-none'}`}
            style={{
              bottom: '20px',
              right: '20px',
            }}
            onMouseEnter={() => document.getElementById('overlay').style.opacity = '0.5'} // Hiệu ứng khi hover vào button
            onMouseLeave={() => document.getElementById('overlay').style.opacity = '0'}  // Xóa hiệu ứng khi rời khỏi button
          >
            <BarsOutlined className="text-white text-2xl" />
          </button>
        </div>





        <div
          className={`w-full transition-all duration-300 bg-[#252525] 
            flex justify-center items-center ${hideNavbar ? 'h-0 overflow-hidden opacity-0' : 'lg:h-[6.5vh] h-auto opacity-100'
            } relative`}

        >
          <BottomHeader />

        </div>
      </div>



    </div>
  );
}
export default memo(Header);
