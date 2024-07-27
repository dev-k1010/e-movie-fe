import { Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import React, { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import styled from "styled-components";
import Carditem from "../../../components/cardItem/Carditem";
import TrailerPreview from "../../../components/strailerPreview/StrailerPreview";

function MovieList(props) {

  const navigate = useNavigate();
  const { listPhim } = props;
  const [isOpen, setOpen] = useState(false);
  const [selectedPhim, setSelectedPhim] = useState(null);
  const [activeKey, setActiveKey] = useState("2");
  const settings = {
    className: "center ",
    infinite: true,
    centerPadding: "2px",
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 1500,
    autoplaySpeed: 2000,
    rows: 1,
    cssEase: "ease-in-out",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const handleOpen = (phim) => {
    setOpen(true);
    setSelectedPhim(phim);
  };
  const handleClose = () => {
    setOpen(false);
    setSelectedPhim(null);
  };
  const handleOnChange = (key) => {
    if (key !== 1) {
      setActiveKey(key)
    }

  }

  const renderMovieSlider = (movies, filterFunc) => {
    const filteredMovies = [...movies].reverse().filter(filterFunc);
    console.log("🙂 ~ renderMovieSlider ~ filteredMovies:", filteredMovies)
    let customSettings = { ...settings };

    if (filteredMovies.length < 4) {
      customSettings = {
        ...settings,
        slidesToShow: 1,
        className: "center px-[450px]",
      };
    }
    return (
      <StyledSlider {...customSettings}>
        {filteredMovies.map((phim, i) => (
          <div className="px-3">
            <Carditem
              key={i}
              phim={phim}
              navigate={navigate}
              handleOpen={handleOpen}
            />
          </div>
        ))}
      </StyledSlider>
    );
  };

  const itemSlider = [
    {
      key: "1",
      label: (
        <div className="flex justify-start items-center space-x-3">
          <div className="h-8 w-[5px] bg-color1"></div>
          <p
            className="text-lg md:text-2xl transition duration-300 font-light rounded-lg shadow hover:bg-white-500 cursor-text text-white "
          >
            PHIM
          </p>
        </div>
      ),
      children: null,
      disabled: true,
    }
    ,
    {
      key: "2",
      label: (
        <button
          className={`text-lg md:text-md transition duration-500 p-2  rounded-lg shadow hover:bg-white-500  ${activeKey === "2" ? "text-color1" : "text-white"
            }`}
        >
          Đang chiếu
        </button>
      ),
      children: renderMovieSlider(listPhim, (phim) => phim.dangChieu === true),
    },
    {
      key: "3",
      label: (
        <button
          className={`text-lg md:text-md transition duration-500 p-2  rounded-lg shadow hover:bg-white-500 ${activeKey === "3" ? "text-color1" : "text-white"
            }`}
        >
          Sắp chiếu
        </button>
      ),
      children: renderMovieSlider(listPhim, (phim) => phim.sapChieu === true),
    },
  ];
  return (
    <div className=" overflow-hidden ">
      <StyleTabs
        activeKey={activeKey}
        onChange={handleOnChange}
        destroyInactiveTabPane={true}
        defaultActiveKey="2"
      >
        {itemSlider.map((item) => (
          <TabPane
            tab={item.label}
            key={item.key}
            disabled={item.disabled}
          >
            {item.children}
          </TabPane>
        ))}
      </StyleTabs>
      {isOpen && selectedPhim && (
        <TrailerPreview
          isOpen={isOpen}
          selectedPhim={selectedPhim.trailer}
          handleClose={handleClose}
        />
      )}
    </div>
  );
}
export default memo(MovieList);
const StyledSlider = styled(Slider)`
  .slick-prev, 
  .slick-next {
     top: -50px;
     left: auto;
     z-index: 1;
     &::before {
        color: white;
        font-size: 30px;
      }
        @media (max-width: 768px) {
        left: 10px; 
        top: 50%;
        transform: translateY(50%);
      }
  }
  .slick-prev {
     right: 70px;
    }

  .slick-next {
      right: 20px;
      }
`;

const StyleTabs = styled(Tabs)`

    .ant-tabs-ink-bar {
      width: 70px !important;
      background: none !important;
    }
    
    .ant-tabs-nav::before {
     border-bottom: none !important;
    }


  `
