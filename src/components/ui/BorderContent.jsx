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
                <div ref={squareRef} className="aspect-square w-3 grid grid-cols-2">
                    <span className="col-span-1 grid grid-rows-2">

                        {/* Trên trái */}
                        <span ></span>

                        {/* Dưới trái */}
                        <span className="border-b border-[#252525]"></span>
                    </span>
                    <span className="col-span-1 grid grid-rows-2">

                        {/* Trên phải */}
                        <span className=" border-r border-[#252525]"></span>

                        {/* Dưới phải */}
                        <span className='border-t border-l rounded-tl-md border-[#252525]'></span>

                    </span>
                </div>

                <div className="w-full h-full border-t border-[#252525] "></div>

                {/* Phải*/}
                <div className=" aspect-square w-3 grid grid-cols-2">
                    <span className="col-span-1 grid grid-rows-2">
                        {/* Trên trái */}
                        <span className=" border-l border-[#252525]"></span>

                        {/* Dưới trái */}
                        <span className="border-t border-r border-[#252525] rounded-tr-md"></span>
                    </span>
                    <span className="col-span-1 grid grid-rows-2">

                        {/* Trên phải */}
                        <span ></span>


                        {/* Dưới phải */}
                        <span className='border-b border-[#252525]'></span>
                    </span>
                </div>

            </div>


            {/* Giữa */}
            <div className="w-full h-full overflow-hidden relative">
                <div
                    style={{ width: `${sideLength}px` }}
                    className="h-full absolute left-0 top-0 aspect-square flex justify-start items-center border-l border-[#252525]"
                >

                </div>

                <div
                    className="mx-auto rounded-lg "
                    style={{ width: `calc(100% - ${2 * sideLength}px)` }} // Adjust width based on side length
                >
                    {children}
                </div>

                <div
                    style={{ width: `${sideLength}px` }}
                    className="h-full absolute right-0 top-0 aspect-square flex justify-end items-center border-r border-[#252525]"
                >

                </div>
            </div>

            {/* Dưới */}
            <div className='flex items-end'>

                {/* Trái */}
                <div className=" aspect-square w-3 grid grid-cols-2">
                    <span className="col-span-1 grid grid-rows-2">

                        {/* Trên trái */}
                        <span className="border-t border-[#252525]"></span>

                        {/* Dưới trái */}
                        <span ></span>

                    </span>
                    <span className="col-span-1 grid grid-rows-2">
                        {/* Trên phải */}
                        <span className='border-b border-l border-[#252525] rounded-bl-md' ></span>

                        {/* Dưới phải */}
                        <span className=' border-r border-[#252525]'></span>
                    </span>
                </div>

                <div className="w-full h-full border-t border-[#252525] "></div>


                {/* Phải */}
                <div className=" aspect-square w-3 grid grid-cols-2">
                    <span className="col-span-1 grid grid-rows-2">

                        {/* Trên trái */}
                        <span className="border-b border-r border-[#252525] rounded-br-md"></span>

                        {/* Dưới trái */}
                        <span className=" border-l border-[#252525]"></span>
                    </span>
                    <span className="col-span-1 grid grid-rows-2">
                        {/* Trên  phải*/}
                        <span className="border-t  border-[#373737]"></span>

                        {/* Dưới phải */}
                        <span ></span>

                    </span>
                </div>

            </div>

        </div>
    )
}

