import React, { useLayoutEffect, useRef, useState } from 'react'

export default function BorderedContainer({ children }) {
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

            {/* Góc Trên Trái */}
            <div className='flex items-start'>

                <div ref={squareRef} className=" bg-[#131313] w-5 h-5 grid grid-cols-2">
                    <span className="col-span-1 grid grid-rows-2">
                        <span className="border border-[#555555]"></span>
                        <span className="border-b border-r border-[#555555]"></span>
                    </span>
                    <span className="col-span-1 grid grid-rows-2">
                        <span className="border-b border-r border-[#555555]"></span>
                        <span></span>
                    </span>
                </div>

                <div className="w-full h-full border-t border-[#555555] "></div>


                <div className=" bg-[#131313] w-5 h-5 grid grid-cols-2">
                    <span className="col-span-1 grid grid-rows-2">
                        <span className="border-b border-l border-[#555555]"></span>
                        <span ></span>
                    </span>
                    <span className="col-span-1 grid grid-rows-2">
                        <span className="border border-[#555555]"></span>
                        <span className='border-b border-l border-[#555555]'></span>
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

            <div className='flex items-end'>

                {/* Góc Dưới Trái */}
                <div className=" bg-[#131313] w-5 h-5 grid grid-cols-2">
                    <span className="col-span-1 grid grid-rows-2">
                        <span className="border-t border-r border-[#555555]"></span>
                        <span className="border border-[#555555]"></span>
                    </span>
                    <span className="col-span-1 grid grid-rows-2">
                        <span></span>
                        <span className='border-t border-r border-[#555555]'></span>
                    </span>
                </div>

                <div className="w-full h-full border-t border-[#555555] "></div>


                {/* Góc Dưới Phải */}
                <div className=" bg-[#131313] w-5 h-5 grid grid-cols-2">
                    <span className="col-span-1 grid grid-rows-2">
                        <span></span>
                        <span className="border-t border-l border-[#555555]"></span>
                    </span>
                    <span className="col-span-1 grid grid-rows-2">
                        <span className="border-t border-l border-[#555555]"></span>
                        <span className='border border-[#555555]'></span>
                    </span>
                </div>

            </div>

        </div>
    )
}




{/* <div className="border border-[#555555] relative w-full h-full overflow-hidden" >


<div className="absolute top-[-1px] left-[-1px] bg-[#131313] w-5 h-5 grid grid-cols-2 z-20">
    <span className="col-span-1 grid grid-rows-2">
        <span className="border border-[#555555]"></span>
        <span className="border-b border-r border-[#555555]"></span>
    </span>
    <span className="col-span-1 grid grid-rows-2">
        <span className="border-b border-r border-[#555555]"></span>
        <span></span>
    </span>
</div>


<div className="absolute top-[-1px] right-[-1px] bg-[#131313] w-5 h-5 grid grid-cols-2 z-20">
    <span className="col-span-1 grid grid-rows-2">
        <span className="border-b border-l border-[#555555]"></span>
        <span ></span>
    </span>
    <span className="col-span-1 grid grid-rows-2">
        <span className="border border-[#555555]"></span>
        <span className='border-b border-l border-[#555555]'></span>
    </span>
</div>


<div className="absolute bottom-[-1px] left-[-1px] bg-[#131313] w-5 h-5 grid grid-cols-2 z-20">
    <span className="col-span-1 grid grid-rows-2">
        <span className="border-t border-r border-[#555555]"></span>
        <span className="border border-[#555555]"></span>
    </span>
    <span className="col-span-1 grid grid-rows-2">
        <span></span>
        <span className='border-t border-r border-[#555555]'></span>
    </span>
</div>


<div className="absolute bottom-[-1px] right-[-1px] bg-[#131313] w-5 h-5 grid grid-cols-2 z-20">
    <span className="col-span-1 grid grid-rows-2">
        <span></span>
        <span className="border-t border-l border-[#555555]"></span>
    </span>
    <span className="col-span-1 grid grid-rows-2">
        <span className="border-t border-l border-[#555555]"></span>
        <span className='border border-[#555555]'></span>
    </span>
</div>


<div>
    {children}
</div>
</div> */}