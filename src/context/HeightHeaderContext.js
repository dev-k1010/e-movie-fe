import React, { createContext, useContext, useState } from 'react'

const HeightHeaderContext = createContext();

export function HeightProvider({ children }) {
    const [heightHeader, setHeightHeader] = useState(null);


    return (
        <HeightHeaderContext.Provider value={{ heightHeader, setHeightHeader }}>
            {children}
        </HeightHeaderContext.Provider>
    );
}


export const useHeightContext = () => useContext(HeightHeaderContext)
