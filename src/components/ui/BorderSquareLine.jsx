import React, { forwardRef, useLayoutEffect, useRef, useState } from 'react';

export default function BorderSquareLine({ children }) {
    const [sideLength, setSideLength] = useState(0);
    const squareRef = useRef(null);

    // Calculate the side length once when the component mounts
    useLayoutEffect(() => {
        if (squareRef.current) {
            const { height } = squareRef.current.getBoundingClientRect();
            setSideLength(height); // Use height to set the side length
        }
    }, []);


    return (
        <div className="w-full border border-[#252525]">
            {/* Top Section */}
            <div className="flex items-center">


                <div ref={squareRef} className="w-10 aspect-square flex justify-center items-center">
                    <div className="aspect-square w-[25%] rotate-45 border border-white"></div>
                </div>

                <span className="w-full h-[1px] flex justify-center items-center bg-[#252525]"></span>

                <div className="w-10 aspect-square flex justify-center items-center">
                    <div className="aspect-square w-[25%] rotate-45 border border-white"></div>
                </div>


            </div>

            {/* Middle Section */}
            <div className="w-full h-full overflow-hidden relative">
                <div
                    style={{ width: `${sideLength}px` }}
                    className="h-full absolute left-0 top-0 aspect-square flex justify-center items-center"
                >
                    <span className="w-[1px] h-full bg-[#252525]"></span>
                </div>

                <div
                    className="mx-auto"
                    style={{ width: `calc(100% - ${2 * sideLength}px)` }} // Adjust width based on side length
                >
                    {children}
                </div>

                <div
                    style={{ width: `${sideLength}px` }}
                    className="h-full absolute right-0 top-0 aspect-square flex justify-center items-center"
                >
                    <span className="w-[1px] h-full bg-[#252525]"></span>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="flex items-center">

                <div className="w-10 aspect-square flex justify-center items-center">
                    <div className="aspect-square w-[25%] rotate-45 border border-white"></div>
                </div>
                <span className="w-full h-[1px] flex justify-center items-center bg-[#252525]"></span>
                <div className="w-10 aspect-square flex justify-center items-center">
                    <div className="aspect-square w-[25%] rotate-45 border border-white"></div>
                </div>

            </div>
        </div>
    );
}
