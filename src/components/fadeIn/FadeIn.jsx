import React, { useEffect, useState } from 'react';
import useURLChange from '../../hooks/use_url_change/useURLChange';

const FadeIn = () => {
    const isVisible = useURLChange()
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleShow = async () => {
            if (isVisible) {
                setShow(true);
            } else {
                // Để fade-out trước khi ẩn
                await new Promise(resolve => setTimeout(resolve, 900)); // Thời gian fade-out
                setShow(false);
            }
        };

        handleShow();
    }, [isVisible]);

    return (
        <div
            className={`absolute inset-0  backdrop-blur-md transition-opacity duration-500 ${show ? 'opacity-100' : 'opacity-0'}`}
            style={{
                zIndex: 1,
                pointerEvents: 'none',
            }}
        />
    );
};

export default FadeIn;
