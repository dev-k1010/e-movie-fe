import { CaretLeftOutlined, CaretRightOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import React from "react";


const SampleNextArrow = ({ className, style, onClick }) => (
    <div
        className={`${className} relative `}
        style={{
            ...style,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: "5px",
            right: "0",
            height: "100%",
            width: "10%",
            zIndex: 1,
        }}
        onClick={onClick}
    />
);
const SamplePrevArrow = ({ className, style, onClick }) => (
    <div
        className={`${className} group relative `}
        style={{
            ...style,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingRight: "5px",
            left: "0",
            height: "100%",
            width: "10%",
            zIndex: 1,
        }}
        onClick={onClick}
    />
);

const bannerSettings = (currentSlider, handleAfterChange) => {

    let settings = {
        infinite: true,
        dots: true,
        className: "center",
        centerMode: true,
        centerPadding: "200px",
        rows: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 4000,
      
        cssEase: "ease-in-out",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        afterChange: handleAfterChange,
        appendDots: dots => (
            <ul
                style={{
                    position: "relative",
                    padding: "0.5rem",
                }}

            >
                {dots}

            </ul>
        ),
        customPaging: i => (
            <div
                style={{
                    position: "absolute",
                    width: "0.5rem",
                    height: "0.5rem",
                    backgroundColor: i === currentSlider ? '#d00000' : 'gray',
                    top: "50%",
                    left: "50%",
                    transform: `translate(-50%, -50%) ${i === currentSlider ? "scale(0.75)" : "scale(1)"} rotate(45deg)`,
                    transition: "transform 0.3s ease, background-color 0.3s ease",
                }}
            >
            </div>
        ),
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
    return settings
}

const movieTabsSettings = (movie) => {




    let settings = {
        infinite: true,
        adaptiveHeight: true,
        slidesToScroll: 1,
        slidesToShow: movie.length < 5 ? movie.length : 5,
        speed: 1500,
        rows: 1,
        cssEase: "ease-in-out",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    className: "center",
                    centerMode: true,
                    slidesToShow: 1,
                    centerPadding: "210px",
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    className: "center",
                    centerMode: true,
                    slidesToShow: 1,
                    centerPadding: "0px",
                    slidesToScroll: 1,
                },
            },
        ]
    };

    return settings;
};

export { bannerSettings, movieTabsSettings }