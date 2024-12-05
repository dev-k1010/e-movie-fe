// BorderWrapper.js
import React from 'react';// Giả sử bạn đã định nghĩa component Corner



const Corner = ({ position }) => (
    <div className={`absolute ${position} w-full aspect-square flex justify-center items-center `}>
        <div className="w-2 aspect-square bg-[#252525] rotate-45"></div>
    </div>
);


const BorderWrapper = ({ bgColor, children }) => {



    return (
        <div className="border border-[#252525] w-full h-full relative ">
            {/* Trên bên trái */}
            <Corner position={`top-0 left-0 -translate-x-1/2 -translate-y-1/2  ${bgColor}`} />

            {/* Dưới bên trái */}
            <Corner position={`bottom-[0] left-[0] -translate-x-1/2 translate-y-1/2 ${bgColor}`} />

            {/* Dưới bên PHẢI */}
            <Corner position={`bottom-[0] right-[0] translate-x-1/2 translate-y-1/2 ${bgColor}`} />

            {/* Trên bên PHẢI */}
            <Corner position={`top-[0] right-[0] translate-x-1/2 -translate-y-1/2 ${bgColor}`} />
            {/* Nội dung */}
            <div className='p-3'>{children}</div>
        </div>
    );
};

export default BorderWrapper;
