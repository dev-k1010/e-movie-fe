import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import BorderedContainer from '../../components/ui/BorderedContainer';
import TitleComponent from '../../components/ui/TitleComponent';
import { useModalContext } from '../../context/Modalcontext';


export default function PromoBanner() {

    const { handleOpen } =useModalContext();

    const [newsData, setNewsData] = useState(null); // Lưu dữ liệu chung cho từng tab

    // Hàm gọi API dựa trên tab key
    const fetchNewsData = () => {

        axios
            .get("https://60babc8f42e1d0001761ff84.mockapi.io/ArticlesKhuyenMai02")
            .then((result) => {
              
                return setNewsData(result.data)
            })
            .catch((error) => console.error(error));

    };

    // Gọi dữ liệu khi tab được thay đổi
    useEffect(() => {
        fetchNewsData();
    }, []);


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    const contentOpen = (item) =>
        <div
            className="home-page w-[1200px] h-[600px] overflow-auto modal-content"

        >
            <div className='w-full h-full bg-transparent flex justify-center items-center'
                onClick={(e) => e.stopPropagation()}
            >
                <div className="w-[35%] h-full bg-[#131313] p-5 pr-2">
                    <BorderedContainer>
                        <div className='space-y-5 py-3 px-5'>
                            
                            <img src={item.img} alt="" className='w-full h-[200px] object-cover object-center' />

                            <div className="flex space-x-5">
                                <div className='w-10 h-10 rounded-full '
                                >
                                    <img src="./IMG/logo-fb.png" alt="" className='w-full h-full' />
                                </div>
                                <div className='w-10 h-10 rounded-full '
                                >
                                    <img src="./IMG/logo-ig.png" alt="" className='w-full h-full' />
                                </div>
                                <div className='w-10 h-10 rounded-full '
                                >
                                    <img src="./IMG/logo-linkin.png" alt="" className='w-full h-full' />
                                </div>
                                <div className='w-10 h-10 rounded-full bg-white flex justify-center items-center'
                                >
                                    <img src="./IMG/logo-threads.png" alt="" className='w-[80%] h-[80%]' />
                                </div>
                                <div className='w-10 h-10 rounded-full '
                                >
                                    <img src="./IMG/logo-tiktok.png" alt="" className='w-full h-full' />
                                </div>
                            </div>
                        </div>
                    </BorderedContainer>
                </div>
                <div className="w-[65%] h-full bg-[#131313] p-5 pl-2"
                >
                    <BorderedContainer>
                        <div className='h-full py-3 px-5'>
                            <div className='w-full space-y-5 h-full overflow-y-auto'>
                                {TitleComponent(`${item.title}`)}
                                <p className='font-sans font-normal text-sm text-white'>{item.text}</p>
                                <p className='font-sans font-normal text-sm text-white'>{item.text}</p>
                                <p className='font-sans font-normal text-sm text-white'>{item.text}</p>
                                <p className='font-sans font-normal text-sm text-white'>{item.text}</p>
                                <p className='font-sans font-normal text-sm text-white'>{item.text}</p>
                                <p className='font-sans font-normal text-sm text-white'>{item.text}</p>
                                <p className='font-sans font-normal text-sm text-white'>{item.text}</p>
                                <p className='font-sans font-normal text-sm text-white'>{item.text}</p>
                                <p className='font-sans font-normal text-sm text-white'>{item.text}</p>
                                <p className='font-sans font-normal text-sm text-white'>{item.text}</p>
                                <p className='font-sans font-normal text-sm text-white'>{item.text}</p>
                                <p className='font-sans font-normal text-sm text-white'>{item.text}</p>
                                <p className='font-sans font-normal text-sm text-white'>{item.text}</p>
                                <p className='font-sans font-normal text-sm text-white'>{item.text}</p>
                                <p className='font-sans font-normal text-sm text-white'>{item.text}</p>
                            </div>
                        </div>
                    </BorderedContainer>
                </div>

            </div>
        </div >


    return (
        <div className="news w-full h-full flex flex-col justify-center items-center ">

            <Slider {...settings} className='w-full h-full'>



                {newsData?.map((item) => (
                    <button className='w-full h-full p-3 flex flex-col space-y-3 group hover:cursor-pointer'
                        onClick={(e) => handleOpen(contentOpen(item))}
                    >
                        <img src={item.img} alt="" className='w-full h-[200px]' />

                        <p className='flex-1 font-serif font-semibold text-xl line-clamp-3 transition duration-300 text-white/90 group-hover:text-white text-start'>{item.title}
                        </p>

                        <p className='font-serif font-normal text-md line-clamp-4 text-[#cdcdcd] text-start'>{item.text}</p>
                    </button>

                ))}



            </Slider>

        </div>
    );
}
