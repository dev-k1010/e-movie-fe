
import React from 'react'
import bannerSlider1 from "./dataImgApp/banner-slider1.jpg";
import bannerSlider2 from "./dataImgApp/banner-slider2.jpg";
import bannerSlider3 from "./dataImgApp/banner-slider3.jpg";
import bannerSlider4 from "./dataImgApp/banner-slider4.jpg";
import bannerSlider5 from "./dataImgApp/banner-slider5.jpg";
import bannerSlider6 from "./dataImgApp/banner-slider6.jpg";
import { Carousel } from 'antd';
import { moblie } from "./dataImgApp/mobile.jsx"
import { useNavigate } from 'react-router-dom';

export default function AppMobile() {

  const data = [
    bannerSlider1,
    bannerSlider2,
    bannerSlider3,
    bannerSlider4,
    bannerSlider5,
    bannerSlider6,
  ];

  const renderPhone = () => {
    return data.map((item, index) => {
      return (
        <div key={index}>
          <img
            className="rounded-xl"
            src={item}
            alt="slider"
          />
        </div>
      );
    });
  };
  const navigate = useNavigate()
  const handleImageClick = () => {
    navigate('/error404');
  };
  return (

    <div className='w-full h-full  pb-5 lg:pb-0'
      style={{
        backgroundImage: `url('IMG/bg-1.jpg')`,
        backgroundRepeat: "repeat",

      }}
    >

      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='p-10 lg:pl-44 lg:py-20 col-span-1 text-white flex flex-col items-center lg:items-start justify-center space-y-5 lg:space-y-10' >
          <p
            style={{
              lineHeight: "4rem"
            }}
            className='text-3xl lg:text-4xl text-center font-bold lg:text-start leading-loose' >
            Ứng dụng tiện lợi dành cho người yêu điện ảnh
          </p>
          {/* <span className='text-3xl lg:text-4xl text-center font-bold '>
            người yêu điện ảnh
          </span> */}
          <span className='text-lg lg:text-xl text-center lg:text-start font-medium'>
            Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
            đổi quà hấp dẫn.
          </span>
          <button
            onClick={handleImageClick}
            className='px-10 py-6 text-black rounded-lg transition duration-500 flex justify-center items-center text-lg lg:text-xl text-center lg:text-start bg-color4 hover:transition hover:duration-500 hover:bg-color4/70 border-0'
          >
            App miễn phí - Tải về ngay!
          </button>
          <div className='text-lg lg:text-xl text-center lg:text-start font-medium'>
            TIX có hai phiên bản {" "}
            <a

              rel="noreferrer"
              target="_blank"
              href="https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197"
            >
              IOS
            </a>
            {" "}
            &
            {" "}
            <a

              rel="noreferrer"
              target="_blank"
              href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
            >
              Android
            </a>
          </div>
        </div>

        <div className='flex justify-center items-center'>
          <div className='relative w-48 flex justify-center items-center'>
            <img className='w-full absolute ' alt="phone" src={moblie} />
            <Carousel
              className="w-44 z-30 rounded-xl overflow-hidden"
              autoplay
              dotPosition="none"
            >
              {renderPhone()}
            </Carousel>
          </div>
        </div>
      </div>

    </div>

  )
}
