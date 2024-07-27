import React, { memo, useState } from "react";
import Slider from "react-slick";
import Lottie from "lottie-react";
import animationPlay from "../../../animation/home/animationPlay.json";
import styled from "styled-components";
import TrailerPreview from "../../../components/strailerPreview/StrailerPreview";

function Banner(props) {
  const { listBanner } = props;
  const extendedBannerList = [...listBanner, ...listBanner];
  const [isOpen, setOpen] = useState(false);
  const [selectedPhim, setSelectedPhim] = useState(null);

  const items = [
    { trailer: "kBY2k3G6LsM&t=4s" },
    { trailer: "kBY2k3G6LsM&t=4s" },
    { trailer: "kBY2k3G6LsM&t=4s" },
    { trailer: "kBY2k3G6LsM&t=4s" },
    { trailer: "kBY2k3G6LsM&t=4s" },
    { trailer: "kBY2k3G6LsM&t=4s" },
  ];

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "280px",
    slidesToShow: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    rows: 1,
    cssEase: "ease-in-out",
    slidesToScroll: 1,

    responsive: [

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "90px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0",
        },
      },
    ],
  };

  const handleOpen = (index) => {
    const urtStrailer = `https://www.youtube.com/watch?v=${items[index].trailer}`
    setOpen(true);
    setSelectedPhim(urtStrailer);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPhim(null);
  };

  return (
    <Container className="Banner bg-gradient-to- from-black to-white/5 ">
      <Slider {...settings} >
        {extendedBannerList.map((banner, i) => (
          <div
            key={i}
            className="relative flex justify-center items-center w-full h-[250px] lg:h-[370px]"
          >
            <img
              src={`${banner.hinhAnh}`}
              loading="lazy"
              className="absolute inset-0 w-full h-full lg:px-9 "
              style={{ zIndex: 1 }}
            />
            <div className="flex justify-center items-center w-full h-full">
              {!isOpen && (
                <button
                  className="w-36 h-28 flex justify-center items-center"
                  onClick={() => handleOpen(i)}
                  style={{ zIndex: 2 }}
                >
                  <Lottie animationData={animationPlay} loop={true} />
                </button>
              )}
            </div>
          </div>
        ))}
      </Slider>

      {isOpen && <TrailerPreview isOpen={isOpen} selectedPhim={selectedPhim} handleClose={handleClose} />}
    </Container>


  );
}

export default memo(Banner);


const Container = styled.div`
  &.Banner {
    .slick-prev {
      left: 10px;
      z-index: 1;
      width: initial;
      height: initial;
      &::before {
        font-size: 35px;
      }
    }
    .slick-next {
      right: 10px;
      width: initial;
      height: initial;
      &::before {
        font-size: 35px;
      }
    }
    .slick-dots {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      width: auto;
      button {
        &:before {
          color: white;
          font-size: 15px;
        }
      }
    }
    .slick-active {
      button {
        &:before {
          opacity: 1;
        }
      }
    }
  }
`;