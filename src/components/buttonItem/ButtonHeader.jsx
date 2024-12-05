import React from 'react'
import BorderedContainer from '../ui/BorderedContainer'

export default function ButtonHeader({ contentButton, handleOpen, content }) {
    return (

        <button className=" w-[25vh] flex flex-col justify-between space-y-1"
            onClick={(e) => handleOpen(content)}
        >
            <span className="w-full h-full grid grid-cols-12 gap-2 justify-center items-center">
                <span
                    className="col-span-5 w-full h-[2px] bg-[#252525] scale-y-[0.5]"></span>
                <span className="col-span-2 w-full h-full flex justify-center items-center ">
                    <span className="border-2 border-[#252525] w-2 h-2 rotate-45 scale-[0.7]"></span>
                </span>
                <span
                    className="col-span-5 w-full h-[2px] bg-[#252525] scale-y-[0.5]"></span>
            </span>
            <div className="w-full h-full">
                <BorderedContainer>
                    {contentButton}
                </BorderedContainer>
            </div>
            <span className="w-full h-full grid grid-cols-12  gap-2 justify-center items-center">
                <span
                    className="col-span-5 w-full h-[2px] bg-[#252525] scale-y-[0.5]"></span>
                <span className="col-span-2 w-full h-full flex justify-center items-center ">
                    <span className="border-2 border-[#252525] w-2 h-2 rotate-45 scale-[0.7]"></span>
                </span>
                <span
                    className="col-span-5 w-full h-[2px] bg-[#252525] scale-y-[0.5]"></span>
            </span>
        </button>

    )
}
