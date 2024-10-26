import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import PatternedContentBox from '../ui/PatternedContentBox';
import "../promoSlider/style/style.css";


export default function PromoSlider() {

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);

    const dataContent = [
        { imgSrc: "/IMG/sale-1.jpg" },
        { imgSrc: "/IMG/sale-3.jpg" },
        { imgSrc: "/IMG/sale-4.jpg" },
        { imgSrc: "/IMG/sale-5.jpg" },
        { imgSrc: "/IMG/bg-31.jpg" },
        { imgSrc: "/IMG/bg-34.jpg" },
    ]




    const SampleNextArrow = ({ className, style, onClick }) => (
        <div
            className={`${className}`}
            style={{
                ...style,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cssEase: 'linear',
                right: "0",
                height: "90%",
                width: "10%",
                zIndex: 1,
            }}
            onClick={onClick}
        />
    );
    const SamplePrevArrow = ({ className, style, onClick }) => (
        <div
            className={`${className}`}
            style={{
                ...style,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                left: "0",
                height: "90%",
                width: "10%",
                zIndex: 1,
            }}
            onClick={onClick}
        />
    );

    const settings = {
        infinite: true,
        speed: 1000,
        slidesToScroll: 1,
        adaptiveHeight: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        // autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        cssEase: "ease-in-out",

    };


    return (


        <div className='flex justify-between'>

            <div className="w-[calc(33.33%)] Left">
                <Slider
                    asNavFor={nav2}
                    ref={(slider) => (sliderRef1 = slider)}
                    arrows={false}
                    centerMode={true}
                    slidesToShow={1}
                    centerPadding={"0px"}
                    // fade={true}
                    {...settings}
                    className='w-full h-full'
                >

                    {dataContent.map((item, index) => (
                        <div className='h-[30rem] w-full ' key={index}>
                            <div
                                className='w-full h-full bg-black'
                            >
                                {/* Lớp phủ mờ */}
                                <div className="w-full h-full ">
                                    <PatternedContentBox>
                                        <div className='w-full h-full flex justify-center items-center space-x-3 overflow-y-auto slide-content'>

                                            <div className='w-full h-full text-white font-sans font-normal space-y-5  overflow-y-auto'>
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



                                        </div>
                                    </PatternedContentBox>
                                </div>
                            </div>
                        </div>
                    ))}



                </Slider>
            </div>

            {/* Second Slider */}
            <div className="w-[calc(66.66%)] Right">
                <div>
                    <Slider

                        centerMode={true}
                        slidesToShow={3}
                        centerPadding={"0px"}

                        asNavFor={nav1}
                        ref={(slider) => (sliderRef2 = slider)}
                        swipeToSlide={true}
                        focusOnSelect={true}
                        {...settings}
                        className='w-full overflow-hidden '
                    >
                        {dataContent.map((item, index) => (
                            <div key={index} className=' h-[30rem]'
                            >
                                {/* Hiển thị ảnh từ mảng */}
                                <div className='w-full h-full'
                                // style={{
                                //     backgroundImage: `url(${item.imgSrc})`,
                                //     backgroundRepeat: "no-repeat",
                                //     backgroundSize: "cover",
                                //     backgroundPosition: "center",
                                // }}
                                >
                                    <img src={item.imgSrc} className='w-full h-full object-fill object-center' alt="" />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        </div>


    )
}
