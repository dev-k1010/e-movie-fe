import React, { useRef, useState } from 'react'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import "../programEvents/style/style.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Mousewheel, Pagination } from 'swiper/modules';
import { contentEvent, imgEvent } from '../../constants/dataFake/DataFake';
import BorderedContainer from '../../components/ui/BorderedContainer';


export default function ProgramEvents() {

    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const swiperRef = useRef(null);

    return (

        <div className='w-full bg-transparent rounded-md flex justify-between items-start overflow-hidden h-[29rem]'>


            <div className="w-[calc(75%-10px)] h-[29rem] rounded-md bg-[#131313] p-5"
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

                <BorderedContainer>

                    {contentEvent[activeSlideIndex]?.element}

                </BorderedContainer>
            </div>

            <div className="w-[calc(25%-10px)] h-full  rounded-md">
                <Swiper
                    direction={'vertical'}
                    loop={true}
                    slidesPerView={3}
                    spaceBetween={15}
                    mousewheel={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Mousewheel, Pagination, Autoplay]}
                    speed={1000}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper h-full w-full"
                    onSwiper={(swiper) => swiperRef.current = swiper}
                    onSlideChange={(swiper) => {
                        const index = swiper.realIndex;
                        setActiveSlideIndex(index)
                    }}
                >
                    {imgEvent.map((item, index) => (
                        <SwiperSlide key={index} className=' h-full w-full hover:cursor-pointer'
                            onClick={() => {
                                swiperRef.current.slideToLoop(index);
                                setActiveSlideIndex(index)
                            }}
                        >
                            <div className='w-full h-full rounded-lg overflow-hidden'
                            >
                                <img src={item.imgSrc} className='w-full h-full object-fill object-center' alt="" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>



    )
}
