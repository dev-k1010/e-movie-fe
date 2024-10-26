import React from 'react'
import ButtonLogo from '../../components/buttonItem/ButtonLogo'
import ButtonHeader from '../../components/buttonItem/ButtonHeader'
import "../topHeader/style/style.css";

export default function TopHeader() {
    return (
        <div className="Top-header h-[12vh] w-full overflow-hidden bg-black grid grid-cols-17">

            {/* Button Booking */}
            <span className="header-2 col-span-4 grid grid-cols-12 ">

                <span className="col-span-2 header-2-2"></span>
                <span className="col-span-1 header-2-3"></span>
                <span className="overflow-hidden col-span-8">
                    <span className="header-2-4 w-full h-full flex justify-center items-center">

                        <ButtonHeader contentButton={"Đặt vé"} />

                    </span>
                </span>
                <span className="col-span-1 "></span>
            </span>

            <span className="header-3 col-span-1 "></span>
            <span className="header-4 col-span-1 "></span>
            <span className="header-5 col-span-1 "></span>

            <span className="header-6 col-span-3">
                <ButtonLogo />
            </span>

            <span className="header-7 col-span-1 "></span>
            <span className="header-8 col-span-1 "></span>
            <span className="header-9 col-span-1 "></span>

            {/* Button Search */}
            <span className="header-10 col-span-4 grid grid-cols-12 ">
                <span className="col-span-1 "></span>
                <span className="overflow-hidden col-span-8 ">
                    <span className=" header-10-4 w-full h-full flex justify-center items-center">

                        <ButtonHeader contentButton={"Tìm kiếm"} />

                    </span>
                </span>
                <span className="col-span-1 header-10-3 "></span>
                <span className="col-span-2"></span>
            </span>

        </div>
    )
}
