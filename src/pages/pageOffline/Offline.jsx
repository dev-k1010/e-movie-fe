import React from 'react'
import err404 from "../../animation/offline/err404.json";
import bgAmination from "../../animation/offline/bgAmination.json";
import Lottie from 'lottie-react';

export default function Offline() {
    return (
        <div className='w-full h-screen flex justify-center items-center relative'>
            <Lottie
                animationData={bgAmination}
                loop={true}
                className="absolute inset-0 w-full h-full"
            />
            <div className="absolute inset-0 flex justify-center items-center w-full h-full">
                <Lottie
                    animationData={err404}
                    loop={true}

                />

            </div>
        </div>
    )
}
