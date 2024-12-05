import React, { useLayoutEffect, useRef, useState } from 'react'

export default function PatternedContentBox({ children, bgColor }) {

    const [sideLength, setSideLength] = useState(0);
    const squareRef = useRef(null);

    useLayoutEffect(() => {
        if (squareRef.current) {
            const { height } = squareRef.current.getBoundingClientRect();
            setSideLength(height); // Use height to set the side length
        }
    }, []);

    return (
        <div className="w-full h-full bg-transparent  flex flex-col justify-between p-5 ">

            {/* Trên */}
            <div className="flex justify-between items-start">


                <div className="aspect-square w-8  bg-transparent relative overflow-hidden ">

                    {/* Line 1 (Gốc, không xoay) */}
                    <div className="bg-[#8d8c8c] absolute top-0 left-0 w-[100%] h-[0.5px] origin-top-left"></div>

                    {/* Line 2 */}
                    <div className="bg-[#8d8c8c] absolute top-0 left-0 w-[70%] h-[1px] rotate-[22.5deg] origin-top-left"></div>

                    {/* Line 3 */}
                    <div className="bg-[#8d8c8c] absolute top-0 left-0 w-[calc(100%)] h-[1px] rotate-[45deg] origin-top-left"></div>

                    {/* Line 4 */}
                    <div className="bg-[#8d8c8c] absolute top-0 left-0 w-[70%] h-[1px] rotate-[67.5deg] origin-top-left"></div>

                    {/* Line 5 (Vuông góc với Line 1) */}
                    <div className="bg-[#8d8c8c] absolute top-0 left-0 w-[1px] h-[100%] origin-top-left"></div>


                    {/* Tâm tròn */}
                    <div className='w-4 aspect-square absolute z-10 rounded-full  top-0 left-0 transform translate-x-[-50%] translate-y-[-50%] bg-color1'></div>

                </div>



                <div className="aspect-square w-8 bg-transparent relative overflow-hidden">

                    {/* Line 1 (Gốc, không xoay) */}
                    <div className="bg-[#8d8c8c] absolute top-0 right-0 w-[100%] h-[0.5px] origin-top-right"></div>

                    {/* Line 2 */}
                    <div className="bg-[#8d8c8c] absolute top-0 right-0 w-[70%] h-[1px] rotate-[-22.5deg] origin-top-right"></div>

                    {/* Line 3 */}
                    <div className="bg-[#8d8c8c] absolute top-0 right-0 w-[calc(100%)] h-[1px] rotate-[-45deg] origin-top-right"></div>

                    {/* Line 4 */}
                    <div className="bg-[#8d8c8c] absolute top-0 right-0 w-[70%] h-[1px] rotate-[-67.5deg] origin-top-right"></div>

                    {/* Line 5 (Vuông góc với Line 1) */}
                    <div className="bg-[#8d8c8c] absolute top-0 right-0 w-[1px] h-full origin-top-right"></div>

                    {/* Tâm tròn */}
                    <div className='w-4 aspect-square absolute z-10 rounded-full top-0 right-0 transform translate-x-[50%] translate-y-[-50%] bg-color1'></div>

                </div>


            </div>


            {/* Giữa */}
            <div className="h-full w-full">



                {/* <div className="flex-grow flex justify-center items-center"> */}

                {children}

                {/* </div> */}


            </div>


            {/* Dưới */}
            <div className="flex justify-between items-end">


                <div className=" aspect-square w-8 bg-transparent relative overflow-hidden">

                    {/* Line 1 (Gốc, không xoay) */}
                    <div className="bg-[#8d8c8c] absolute bottom-0 left-0 w-[100%] h-[1px] origin-bottom-left"></div>

                    {/* Line 2 */}
                    <div className="bg-[#8d8c8c] absolute bottom-0 left-0 w-[70%] h-[1px] rotate-[-22.5deg] origin-bottom-left"></div>

                    {/* Line 3 */}
                    <div className="bg-[#8d8c8c] absolute bottom-0 left-0 w-[calc(100%)] h-[1px] rotate-[-45deg] origin-bottom-left"></div>

                    {/* Line 4 */}
                    <div className="bg-[#8d8c8c] absolute bottom-0 left-0 w-[70%] h-[1px] rotate-[-67.5deg] origin-bottom-left"></div>

                    {/* Line 5 (Vuông góc với Line 1) */}
                    <div className="bg-[#8d8c8c] absolute bottom-0 left-0 w-[1px] h-[100%] origin-bottom-left"></div>


                    {/* Tâm tròn */}
                    <div className='w-4 aspect-square absolute z-10 rounded-full  bottom-0 left-0 transform translate-x-[-50%] translate-y-[50%] bg-color1'></div>

                </div>



                <div className="aspect-square w-8 bg-transparent relative overflow-hidden">

                    {/* Line 1 (Gốc, không xoay) */}
                    <div className="bg-[#8d8c8c] absolute bottom-0 right-0 w-[100%] h-[1px] origin-bottom-right"></div>

                    {/* Line 2 */}
                    <div className="bg-[#8d8c8c] absolute bottom-0 right-0 w-[70%] h-[1px] rotate-[22.5deg] origin-bottom-right"></div>

                    {/* Line 3 */}
                    <div className="bg-[#8d8c8c] absolute bottom-0 right-0 w-[calc(100%)] h-[1px] rotate-[45deg] origin-bottom-right"></div>

                    {/* Line 4 */}
                    <div className="bg-[#8d8c8c] absolute bottom-0 right-0 w-[70%] h-[1px] rotate-[67.5deg] origin-bottom-right"></div>

                    {/* Line 5 (Vuông góc với Line 1) */}
                    <sapn className="bg-[#8d8c8c] absolute bottom-0 right-0 h-full w-[1px]"
                    ></sapn>

                    {/* Tâm tròn */}
                    <div className='w-4 aspect-square absolute z-10 rounded-full bottom-0 right-0 transform translate-x-[50%] translate-y-[50%] bg-color1'></div>

                </div>


            </div>

        </div>
    )
}
