import React, { memo, useEffect, useRef, useState } from "react";
import debounce from "lodash/debounce";
import { useHeightContext } from "../../../../context/HeightHeaderContext";
import TopHeader from "../../../../container/topHeader/TopHeader";
import BottomHeader from "../../../../container/bottomHeader/BottomHeader";
import UserAccount from "../../../../container/userAccount/UserAccount";
import { BarsOutlined } from "@ant-design/icons";

function Header() {
  const navbarRef = useRef(null);
  const { setHeightHeader } = useHeightContext();
  const [scrollY, setScrollY] = useState(0);
  const [hideNavbar, setHideNavbar] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(0);

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

  const handleScrollWidth = () => {
    // Tính toán độ dài của thanh loading dựa trên vị trí cuộn
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const currentScroll = window.pageYOffset;

    // Tính phần trăm cuộn
    const scrollPercent = (currentScroll / totalHeight) * 100;

    // Cập nhật chiều rộng của thanh loading
    setScrollWidth(scrollPercent);
  };

  useEffect(() => {
    if (navbarRef.current) {
      const rect = navbarRef.current.getBoundingClientRect();
      setHeightHeader(rect.height);
    }

    window.addEventListener('scroll', handleScrollWidth);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScrollWidth);
    };
  }, []);


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  const handleClick = () => setHideNavbar(!hideNavbar)


  


  return (
    <div ref={navbarRef} className="fixed top-0 right-0 z-50 w-full ">

      <TopHeader />


      {/* Thanh loading */}
      <div className={`w-full h-full transition-all duration-300 ${hideNavbar ? "bg-transparent" : "bg-black"} `}>

        <div
          className="w-full h-[1px] bg-gradient-to-r from-color1 via-pink-600 to-blue-600 transition-all duration-300"
          style={{ width: `${scrollWidth}%` }} // Chiều rộng được điều chỉnh dựa trên vị trí cuộn
        />
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
          className={`w-full transition-all duration-300 bg-gradient-to-b from-black/90 via-black/30   to-transparent 
            flex justify-center items-center space-x-6 ${hideNavbar ? 'h-0 overflow-hidden opacity-0' : 'lg:h-[8vh] h-auto opacity-100'
            }`}

        >
          <BottomHeader />
          <UserAccount />
        </div>
      </div>


    </div>
  );
}
export default memo(Header);

{/* Desktop */ }
{/* <div
  className="
  top-0 left-0 w-full h-full lg:h-[100px] bg-black/90 shadow-sm shadow-black/50 lg:px-16 md:grid grid-cols-8 gap-3 justify-center p-3 items-center overflow-hidden box-border  relative z-20 "
>

  <div className="col-span-1 ">
    <Logo handleMenu={handleMenu} handleClick={handleClick} />
  </div>

  <div className="col-span-5 hidden md:block  font-light">
    <MenuDesktop menuItems={menuItems} handleClick={handleClick} />
  </div>

  <div className="col-span-2 hidden md:block">
    <UserDesktop nguoiDung={nguoiDung} handleLogout={handleLogOut} LoginButton={LoginButton} RegisterButton={RegisterButton} />
  </div>
</div > */}


{/* {
  navbar &&
  <div
    style={{ zIndex: 2000 }}
    className=" h-screen w-2/3 bg-black fixed top-0 right-0 "
  >
    <div className="pr-2 space-y-7 w-full flex flex-col justify-start items-end">
      <button onClick={handleMenu} className="w-10 h-10 text-white ">X</button>
      <MenuMobile menuItems={menuItems} />
      <UserMobile nguoiDung={nguoiDung} handleLogOut={handleLogOut} LoginButton={LoginButton} RegisterButton={RegisterButton} />
    </div>
  </div>
} */}