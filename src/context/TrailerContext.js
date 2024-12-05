import React, { createContext, useCallback, useContext, useState } from 'react';


const TrailerContext = createContext();

export const TrailerProvider = ({ children }) => {

    const [isOpen, setOpen] = useState(false);

    const [content, setContent] = useState(null)

    /**
     * Mở trailer của phim được chọn
     * @param {object} phim - Đối tượng phim hiện tại được chọn
     */
    const handleOpen = useCallback((content) => {
        setOpen(true);
        setContent(content);
    }, []);


    /**
     * Đóng trailer của phim
     */
    const handleClose = useCallback(() => {
        setOpen(false);
        setContent(null);
    }, []);


    return (
        <TrailerContext.Provider value={{ isOpen, content, handleOpen, handleClose }}>
            {children}
        </TrailerContext.Provider>
    );
};

// Custom hook để sử dụng context
export const useTrailerContext = () => {
    return useContext(TrailerContext);
};