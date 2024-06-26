
import React from 'react'
import bannerSlider1 from "./dataImgApp/banner-slider1.jpg";
import bannerSlider2 from "./dataImgApp/banner-slider2.jpg";
import bannerSlider3 from "./dataImgApp/banner-slider3.jpg";
import bannerSlider4 from "./dataImgApp/banner-slider4.jpg";
import bannerSlider5 from "./dataImgApp/banner-slider5.jpg";
import bannerSlider6 from "./dataImgApp/banner-slider6.jpg";
import { Container } from '../banner/Banner';
import { Button, Carousel} from 'antd';
import {moblie} from "./dataImgApp/mobile.jsx"

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

  return (
  
      <div className='w-full h-full px-40' >
       
           <div className='grid grid-cols-2'>
             <div  className='p-20 col-span-1 text-white flex flex-col items-start justify-center space-y-10' >
              <span className='text-4xl font-bold text-start' >
                Ứng dụng tiện lợi dành cho
              </span>
              <span  className='text-4xl font-bold '>
                người yêu điện ảnh
              </span>
              <span  className='text-xl font-medium'>
                Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
                đổi quà hấp dẫn.
              </span>
              <button 
    
                className='px-10 py-6 text-black rounded-lg transition duration-500 flex justify-center items-center text-xl hover:bg-color1/80 bg-color4 border-0'
              >
                App miễn phí - Tải về ngay!
              </button>
              <div  className='text-xl font-medium'>
                TIX có hai phiên bản
                <a
             
                  rel="noreferrer"
                  target="_blank"
                  href="https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197"
                >
                  IOS
                </a>
                &
                <a
             
                  rel="noreferrer"
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                >
                  Android
                </a>
              </div>
            </div>

        <div  className='flex justify-center items-center'> 
          <div className='relative w-48 flex justify-center items-center'>
            <img className='w-full absolute '  alt="phone" src={moblie} />
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
