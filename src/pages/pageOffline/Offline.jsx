import React from 'react'
import LottieAnimation from '../../components/lottieAnimation/LottieAnimation'


export default function Offline() {
    return (
        <div className='w-full h-screen flex justify-center items-center relative'>
            <LottieAnimation nameAnimation="bgError" classCss="absolute inset-0 w-full h-full" />
            <div className="absolute inset-0 flex justify-center items-center w-full h-full">
                <LottieAnimation nameAnimation="error404" />
            </div>
        </div>
    )
}
