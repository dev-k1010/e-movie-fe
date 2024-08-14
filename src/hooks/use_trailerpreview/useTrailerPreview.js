import React, { useCallback, useState } from 'react'

function useTrailerPreview() {

    const [isOpen, setOpen] = useState(false);

    const [selectedPhim, setSelectedPhim] = useState(null);


    /**
     * Mở trailer của phim được chọn
     * @param {object} phim - Đối tượng phim hiện tại được chọn
     */
    const handleOpen = useCallback((trailerUrl) => {
        setOpen(true);
        setSelectedPhim(trailerUrl);
    }, []);


    /**
     * Đóng trailer của phim
     */
    const handleClose = useCallback(() => {
        setOpen(false);
        setSelectedPhim(null);
    }, []);

    return { isOpen, selectedPhim, handleOpen, handleClose };
};

export default useTrailerPreview;