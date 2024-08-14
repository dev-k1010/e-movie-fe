import React from 'react';
import ReactPlayer from 'react-player';

const TrailerPreview = ({ isOpen, selectedPhim, handleClose }) => {

    if (!isOpen || !selectedPhim) return null;

    return (
        <div
            style={{ zIndex: 10000000 }}
            className=" fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center"
        >
            <div className="relative w-full max-w-screen-lg mx-4 md:mx-8 lg:mx-16 space-y-3">
                <button
                    onClick={handleClose}
                    className="absolute -top-4 right-0 text-white text-xl md:-top-6"
                >
                    Đóng
                </button>
                <ReactPlayer
                    url={selectedPhim}
                    controls
                    width="100%"
                    height="70vh"
                />
            </div>
        </div>
    );
};

export default TrailerPreview;