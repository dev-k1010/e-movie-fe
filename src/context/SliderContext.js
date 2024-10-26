import React, { createContext, useContext, useState } from 'react'

const SliderContext = createContext()

export function SliderProvider({ children }) {
    const [currentSlider, setCurrentSlider] = useState(0);

    return (
        <SliderContext.Provider value={{ currentSlider, setCurrentSlider }}>
            {children}
        </SliderContext.Provider>
    )
}

export const useSliderContext = () => useContext(SliderContext);