import Lottie from 'lottie-react'
import React, { memo } from 'react'
import lazyAnimation from "./lazyAnimation.json"

function LazyLoad(isLoading) {

    return isLoading ? (
        <div
            style={{
                width: "100%",
                height: "100%",
                background: "black",
                // position: "fixed",
                // top: 0,
                // left: 0,
                zIndex: 100000,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Lottie
                animationData={lazyAnimation}
                loop={true}
                className="w-60"
            />
        </div>
    ): null
}

export default memo(LazyLoad)