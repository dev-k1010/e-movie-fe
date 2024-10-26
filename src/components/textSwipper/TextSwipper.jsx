import React, { useRef, useState } from 'react'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';

import "../textSwipper/style/style.css";


import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs, EffectFade, Autoplay } from 'swiper/modules';
import PatternedContentBox from '../ui/PatternedContentBox';

export default function TextSwipper() {

    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const swiperRef = useRef(null);


    const dataContent = [
        { imgSrc: "/IMG/sale-1.jpg" },
        { imgSrc: "/IMG/sale-3.jpg" },
        { imgSrc: "/IMG/sale-4.jpg" },
        { imgSrc: "/IMG/sale-5.jpg" },
        { imgSrc: "/IMG/bg-31.jpg" },
        { imgSrc: "/IMG/bg-34.jpg" },
    ]

    const content = [
        {
            id: 0,
            element: (
                <div className='w-full h-full overflow-y-auto space-y-5'>
                    <h1 className='text-center uppercase text-lg'>yêu thì yêu - sale thì slae</h1>
                    <p className=" text-sm">
                        Cặp đôi yêu nhau thì không thể bỏ lỡ! Mua vé xem phim ngay hôm nay với mức giảm giá siêu khủng dành cho cặp đôi:
                    </p>

                    <ul className=" text-sm list-disc list-inside space-y-3">
                        <li><strong>Giảm 15%</strong> cho 2 vé xem phim vào các ngày từ Thứ 2 đến Thứ 5.</li>
                        <li><strong>Giảm 25%</strong> khi mua thêm combo bắp nước</li>
                        <li><strong>Giảm 35%</strong> cho suất chiếu muộn sau 21h </li>
                        <li><strong>Giảm 50%</strong> vào Thứ Tư Vui Vẻ </li>
                    </ul>
                    <ul className=" text-sm list-disc list-inside space-y-3">
                        <li><strong>Giảm 15%</strong> cho 2 vé xem phim vào các ngày từ Thứ 2 đến Thứ 5.</li>
                        <li><strong>Giảm 25%</strong> khi mua thêm combo bắp nước</li>
                        <li><strong>Giảm 35%</strong> cho suất chiếu muộn sau 21h </li>
                        <li><strong>Giảm 50%</strong> vào Thứ Tư Vui Vẻ </li>
                    </ul>

                    <p className="text-sm text-color4 italic">
                        *Không áp dụng với các chương trình khác.
                    </p>
                </div>
            )
        },
        {
            id: 1,
            element: (
                <div className='w-full h-full overflow-y-auto space-y-5'>
                    <h1 className='text-center uppercase text-lg'>a</h1>
                    <p className="text-sm text-color4 italic">
                        *Không áp dụng với các chương trình khác.
                    </p>
                </div>
            )
        },
        {
            id: 2,
            element: (
                <div className='w-full h-full overflow-y-auto space-y-5'>
                    <h1 className='text-center uppercase text-lg'>B</h1>
                    <p className="text-sm text-color4 italic">
                        *Không áp dụng với các chương trình khác.
                    </p>
                </div>
            )
        },
        {
            id: 3,
            element: (
                <div className='w-full h-full overflow-y-auto space-y-5'>
                    <h1 className='text-center uppercase text-lg'>c</h1>
                    <p className="text-sm text-color4 italic">
                        *Không áp dụng với các chương trình khác.
                    </p>
                </div>
            )
        },
        {
            id: 4,
            element: (
                <div className='w-full h-full overflow-y-auto space-y-5'>
                    <h1 className='text-center uppercase text-lg'>d</h1>
                    <p className="text-sm text-color4 italic">
                        *Không áp dụng với các chương trình khác.
                    </p>
                </div>
            )
        },
        {
            id: 5,
            element: (
                <div className='w-full h-full overflow-y-auto space-y-5'>
                    <h1 className='text-center uppercase text-lg'>e</h1>
                    <p className="text-sm text-color4 italic">
                        *Không áp dụng với các chương trình khác.
                    </p>
                </div>
            )
        },
    ];
    return (
        <>
            <div className='flex justify-between '>

                <div className="w-[calc(40%-10px)] h-[25rem]"
                    onMouseEnter={() => {
                        if (swiperRef.current && swiperRef.current.autoplay) {
                            swiperRef.current.autoplay.stop(); // Dừng autoplay khi hover
                        }
                    }}
                    onMouseLeave={() => {
                        if (swiperRef.current && swiperRef.current.autoplay) {
                            swiperRef.current.autoplay.start(); // Tiếp tục autoplay khi rời khỏi hover
                        }
                    }}
                >


                    <div
                        className='w-full h-full bg-black'

                    >
                        {/* Lớp phủ mờ */}
                        <div className="w-full h-full ">
                            <PatternedContentBox>
                                <div className='w-full h-full flex justify-center items-center space-x-3 text-white font-sans font-normal'>



                                    {/* Nội dung tương ứng với ảnh */}

                                    {content[activeSlideIndex]?.element}
                                     {/* Lấy nội dung tương ứng */}



                                </div>
                            </PatternedContentBox>
                        </div>
                    </div>

                </div>



                <div className="w-[calc(60%-10px)] h-[25rem]">
                    <Swiper
                        style={{
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                        }}
                        navigation={true}
                        // onSwiper={setThumbsSwiper}
                        centeredSlides={true}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={3}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                        // speed={1000}
                        // autoplay={{
                        //     delay: 4000,
                        //     disableOnInteraction: false,
                        // }}
                        className="mySwiper h-full w-full"



                        onSwiper={(swiper) => swiperRef.current = swiper}

                        onSlideChange={(swiper) => {
                            const index = swiper.realIndex;
                            setActiveSlideIndex(index)
                        }}
                       
                    >

                        {dataContent.map((item, index) => (
                            <SwiperSlide key={index} className=' h-full w-full'>

                                {/* Hiển thị ảnh từ mảng */}
                                <div className='w-full h-full rounded-lg overflow-hidden'
                                // style={{
                                //     backgroundImage: `url(${item.imgSrc})`,
                                //     backgroundRepeat: "no-repeat",
                                //     backgroundSize: "cover",
                                //     backgroundPosition: "center",
                                // }}
                                >
                                    <img src={item.imgSrc} className='w-full h-full object-fill object-center' alt="" />
                                </div>

                            </SwiperSlide>
                        ))}


                    </Swiper>
                </div>

            </div>


        </>
    )
}
