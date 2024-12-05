import React, { useEffect } from 'react';
import { useTrailerContext } from '../../context/TrailerContext';

const TrailerPreview = () => {
    const { isOpen, content, handleClose } = useTrailerContext();

    useEffect(() => {
        // Hàm ngừng cuộn
        const disableScroll = (e) => {
            if (isOpen && !e.target.closest('.modal-content')) {
                e.preventDefault(); // Ngừng cuộn trên trang chính
            }
        };

        // Nếu modal mở, ngừng cuộn trang chính
        if (isOpen) {
            document.addEventListener("wheel", disableScroll, { passive: false });
            document.addEventListener("touchmove", disableScroll, { passive: false });
        } else {
            document.removeEventListener("wheel", disableScroll);
            document.removeEventListener("touchmove", disableScroll);
        }

        return () => {
            document.removeEventListener("wheel", disableScroll);
            document.removeEventListener("touchmove", disableScroll);
        };
    }, [isOpen]);

    // Nếu modal không mở, không render gì
    if (!isOpen) return null;

    return (
        <div
            onClick={handleClose}
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center"
            style={{ zIndex: 60 }}
        >
            {/* Modal Content */}

            {content}

        </div>
    );
};

export default TrailerPreview;
