import React from 'react'

export default function ButtonHeader({ contentButton }) {
    return (

        <button className=" w-[20vh] flex flex-col justify-between space-y-1">
            <span className="w-full h-full grid grid-cols-12 gap-2 justify-center items-center">
                <span
                    className="col-span-5 w-full h-[0.3px] bg-white scale-y-[0.5]"></span>
                <span className="col-span-2 w-full h-full flex justify-center items-center ">
                    <span className="border border-white w-2 h-2 rotate-45 scale-[0.7]"></span>
                </span>
                <span
                    className="col-span-5 w-full h-[0.3px] bg-white scale-y-[0.5]"></span>
            </span>
            <div className="w-full h-full text-white text-center font-sans font-normal text-xs">

                {contentButton}

            </div>
            <span className="w-full h-full grid grid-cols-12  gap-2 justify-center items-center">
                <span
                    className="col-span-5 w-full h-[0.3px] bg-white scale-y-[0.5]"></span>
                <span className="col-span-2 w-full h-full flex justify-center items-center ">
                    <span className="border border-white w-2 h-2 rotate-45 scale-[0.7]"></span>
                </span>
                <span
                    className="col-span-5 w-full h-[0.3px] bg-white scale-y-[0.5]"></span>
            </span>
        </button>

    )
}
