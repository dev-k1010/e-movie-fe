import React from "react";
import { PlayCircleOutlined, StarFilled } from "@ant-design/icons";
import FadeIn from "../fadeIn/FadeIn";
import ButtonTicket from "../buttonItem/buttonTicket/ButtonTicket";
import ReactPlayer from "react-player";
import { useModalContext } from "../../context/Modalcontext";

// Hiệu ứng hover
const getHoverEffectClasses = "opacity-0 group-hover:opacity-100 transition-opacity duration-300"

// Hàm giúp xác định lớp căn chỉnh cho `Label` dựa trên vị trí
const getAlignmentClass = (position) => {
    return position.includes('left') ? 'items-start border-l' : 'items-end border-r';
};

// Hàm xác định vị trí của border dựa trên vị trí
const getBorderPosition = (position) => {
    return {
        position: "absolute",
        width: "40px",
        height: "0px",
        borderTop: "1px solid white",
        [position.includes('top') ? 'top' : 'bottom']: 0,
        [position.includes('left') ? 'left' : 'right']: 0,
    };
};

const Label = ({ position, content }) => {
    // Lấy lớp căn chỉnh và vị trí border từ các hàm helper
    const alignmentClass = getAlignmentClass(position);
    const borderPosition = getBorderPosition(position);

    return (
        <span className={`absolute ${position} w-[80px] h-[40px] p-3 flex flex-col ${alignmentClass} font-sans font-normal text-sm text-white ${getHoverEffectClasses}`}>
            <div style={borderPosition}></div>
            {content}
        </span>
    );
};

const HoverOverlay = () => (
    <span className={`absolute top-0 left-0 w-[110%] h-full bg-black/20 backdrop-blur-md ${getHoverEffectClasses}`}></span>
);



const CenterButtonGroup = ({ handleOpen, movie }) => (
    <span className={`absolute inset-0 flex flex-col items-center justify-center ${getHoverEffectClasses} space-y-5 button-card`}>

        <button
            className="w-[120px] h-[40px] text-sm font-sans font-normal transition duration-300 rounded-full space-x-3 text-white border hover:border-[#131313] hover:bg-[#131313]"
            onClick={(e) => {
                e.stopPropagation();
                handleOpen(
                    <div className="w-full h-full px-56 py-16">

                        <ReactPlayer
                            url={movie.trailer}
                            controls
                            width="100%"
                            height="100%"
                        />
                    </div>
                );
            }}
        >
            <span>Trailer</span>
            <PlayCircleOutlined className="text-lg" />
        </button>

        <ButtonTicket urlPath={`/detail/${movie.maPhim}`} />

    </span>
);


export default function CardFilm({ movie, isVirtual }) {
    const { handleOpen } = useModalContext();


    const cardTopDemo = (
        <div
            className="relative group w-full h-full overflow-hidden rounded-md flex flex-col justify-center items-center "
        >
            <div className="absolute inset-0 overflow-hidden rounded-md border border-transparent"><img src={movie.hinhAnh} alt="" className=" w-full h-full object-cover object-center origin-center transition duration-300 group-hover:scale-105" loading="lazy" /></div>

            <FadeIn />

            <HoverOverlay />

            <Label position="top-3 left-3" content="180p" />
            <Label position="top-3 right-3"
                content={
                    <span className="flex space-x-1">
                        <span>5.0</span> <StarFilled />
                    </span>
                } />
            <Label position="bottom-3 left-3" content="VN" />
            <Label position="bottom-3 right-3" content="ALL" />
            <CenterButtonGroup handleOpen={handleOpen} movie={movie} />
        </div>
    );

    const cardBottom = (
        <span className="h-[3vw] w-full flex items-center justify-center">
            <span className="text-md text-center text-white font-light overflow-hidden text-ellipsis line-clamp-1">
                {movie.tenPhim}
            </span>
        </span>
    );


    return (
        <div
            // onClick={() => navigate(`/detail/${movie.maPhim}`)}
            className={`w-[14vw] h-[23vw] flex flex-col justify-center items-center ${isVirtual ? "invisible" : ""}`}
        >
            {cardTopDemo}
            {cardBottom}

        </div>
    );
}
