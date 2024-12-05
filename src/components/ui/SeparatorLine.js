import React from 'react'

export default function SeparatorLine() {
    return (
        <div className="w-full h-24 grid grid-cols-17 justify-center items-center">

            <span className="col-span-7 w-full h-[1px] flex justify-center items-center ">
                <span className="w-[100%] h-full bg-[#252525] "></span>
            </span>

            <span className="col-span-3">
            </span>

            <span className="col-span-7 w-full h-[1px] flex justify-center items-center">
                <span className="w-[100%] h-full bg-[#252525] "></span>
            </span>

        </div>
    )
}
