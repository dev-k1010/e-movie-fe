// BorderWrapper.js
import React from 'react';// Giả sử bạn đã định nghĩa component Corner



const Corner = ({ position }) => (
    <div className={`absolute ${position} w-[2%] aspect-square flex justify-center items-center `}>
        <div className="w-[35%] aspect-square border border-white rotate-45"></div>
    </div>
);


const BorderWrapper = ({ bgColor, children }) => {



    return (
        <div className="border border-[#555555] w-full h-full relative ">
            {/* Trên bên trái */}
            <Corner position={`top-0 left-0 -translate-x-1/2 -translate-y-1/2  ${bgColor}`} />

            {/* Dưới bên trái */}
            <Corner position={`bottom-[0] left-[0] -translate-x-1/2 translate-y-1/2 ${bgColor}`} />

            {/* Dưới bên PHẢI */}
            <Corner position={`bottom-[0] right-[0] translate-x-1/2 translate-y-1/2 ${bgColor}`} />

            {/* Trên bên PHẢI */}
            <Corner position={`top-[0] right-[0] translate-x-1/2 -translate-y-1/2 ${bgColor}`} />
            {/* Nội dung */}
            {children}
        </div>
    );
};

export default BorderWrapper;
