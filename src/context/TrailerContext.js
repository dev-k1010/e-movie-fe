import React, { createContext, useCallback, useContext, useState } from 'react';


const TrailerContext = createContext();

export const TrailerProvider = ({ children }) => {

    const [isOpen, setOpen] = useState(false);

    const [urlTrailer, setUrlTrailer] = useState(null)

    /**
     * Mở trailer của phim được chọn
     * @param {object} phim - Đối tượng phim hiện tại được chọn
     */
    const handleOpen = useCallback((trailerUrl) => {
        setOpen(true);
        setUrlTrailer(trailerUrl);
    }, []);


    /**
     * Đóng trailer của phim
     */
    const handleClose = useCallback(() => {
        setOpen(false);
        setUrlTrailer(null);
    }, []);


    return (
        <TrailerContext.Provider value={{ isOpen, urlTrailer, handleOpen, handleClose }}>
            {children}
        </TrailerContext.Provider>
    );
};

// Custom hook để sử dụng context
export const useTrailerContext = () => {
    return useContext(TrailerContext);
};