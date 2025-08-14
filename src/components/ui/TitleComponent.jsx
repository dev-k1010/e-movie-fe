import React from 'react'

export default function TitleComponent(title) {
    return (
        <div className="max-w-screen-lg mx-auto py-1 lg:px-20 space-y-5">

            <div className="text-color1 text-3xl font-serif font-medium uppercase w-full text-center bg-transparent">

                {title}

            </div>

            <div className="w-full h-full grid grid-cols-17 gap-3 justify-center items-center">

                <span className="col-span-8 w-full h-[1px] flex justify-end items-center ">
                    <span className="w-[50%] h-full bg-[#252525]"></span>
                </span>

                <span className="col-span-1 w-full h-full flex justify-center items-center">
                    <span className="w-3 aspect-square grid grid-cols-2 grid-rows-2 gap-[2px] rotate-45 ">

                        <span className="bg-[#555555] w-full h-full"></span>
                        <span className="bg-[#555555] w-full h-full"></span>
                        <span className="bg-[#555555] w-full h-full"></span>
                        <span className="bg-[#555555] w-full h-full"></span>
                    </span>
                </span>

                <span className="col-span-8 w-full h-[1px] flex justify-start items-center">
                    <span className="w-[50%] h-full bg-[#252525] "></span>
                </span>
            </div>

ádasdasdasdadasdasdasd
        </div>
    )
}
