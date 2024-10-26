import React, { useLayoutEffect, useRef, useState } from 'react'

export default function BorderContent({ children }) {

    const [sideLength, setSideLength] = useState(0);
    const squareRef = useRef(null);

    useLayoutEffect(() => {
        if (squareRef.current) {
            const { height } = squareRef.current.getBoundingClientRect();
            setSideLength(height); // Use height to set the side length
        }
    }, []);
    return (
        <div className="w-full overflow-hidden" >

            {/* Góc Trên  */}
            <div className='flex items-start'>

                {/* Trái */}
                <div ref={squareRef} className=" w-5 h-5 grid grid-cols-2">
                    <span className="col-span-1 grid grid-rows-2">

                        {/* Trên trái */}
                        <span className="border border-[#555555] rounded-full"></span>

                        {/* Dưới trái */}
                        <span className="border-b  border-[#555555]"></span>
                    </span>
                    <span className="col-span-1 grid grid-rows-2">

                        {/* Trên phải */}
                        <span className=" border-r border-[#555555]"></span>

                        {/* Dưới phải */}
                        <span className='border-t  border-l rounded-tl-md border-[#555555]'></span>

                    </span>
                </div>

                <div className="w-full h-full border-t border-[#555555] "></div>

                {/* Phải*/}
                <div className="  w-5 h-5 grid grid-cols-2">
                    <span className="col-span-1 grid grid-rows-2">
                        {/* Trên trái */}
                        <span className=" border-l border-[#555555]"></span>

                        {/* Dưới trái */}
                        <span className="border-t border-r border-[#555555] rounded-tr-md"></span>
                    </span>
                    <span className="col-span-1 grid grid-rows-2">

                        {/* Trên phải */}
                        <span className="border border-[#555555] rounded-full"></span>

                        {/* Dưới phải */}
                        <span className='border-b border-[#555555]'></span>
                    </span>
                </div>

            </div>


            {/* Middle Section */}
            <div className="w-full h-full overflow-hidden relative">
                <div
                    style={{ width: `${sideLength}px` }}
                    className="h-full absolute left-0 top-0 aspect-square flex justify-start items-center"
                >
                    <span className="w-[1px] h-full bg-[#555555]"></span>
                </div>

                <div
                    className="mx-auto"
                    style={{ width: `calc(100% - ${2 * sideLength}px)` }} // Adjust width based on side length
                >
                    {children}
                </div>

                <div
                    style={{ width: `${sideLength}px` }}
                    className="h-full absolute right-0 top-0 aspect-square flex justify-end items-center"
                >
                    <span className="w-[1px] h-full bg-[#555555]"></span>
                </div>
            </div>

            {/* Dưới */}
            <div className='flex items-end'>

                {/* Trái */}
                <div className="  w-5 h-5 grid grid-cols-2">
                    <span className="col-span-1 grid grid-rows-2">

                        {/* Trên trái */}
                        <span className="border-t border-[#555555]"></span>

                        {/* Dưới trái */}
                        <span className="border border-[#555555] rounded-full"></span>
                    </span>
                    <span className="col-span-1 grid grid-rows-2">
                        {/* Trên phải */}
                        <span className='border-b border-l border-[#555555] rounded-bl-md' ></span>

                        {/* Dưới phải */}
                        <span className=' border-r border-[#555555]'></span>
                    </span>
                </div>

                <div className="w-full h-full border-t border-[#555555] "></div>


                {/* Phải */}
                <div className="  w-5 h-5 grid grid-cols-2">
                    <span className="col-span-1 grid grid-rows-2">

                        {/* Trên trái */}
                        <span className="border-b border-r border-[#555555] rounded-br-md"></span>

                        {/* Dưới trái */}
                        <span className=" border-l border-[#555555]"></span>
                    </span>
                    <span className="col-span-1 grid grid-rows-2">
                        {/* Trên  phải*/}
                        <span className="border-t  border-[#555555]"></span>

                        {/* Dưới phải */}
                        <span className="border border-[#555555] rounded-full"></span>
                    </span>
                </div>

            </div>

        </div>
    )
}

