import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function useURLChange() {
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleFade = async () => {
            // Khi đường dẫn thay đổi, kích hoạt hiệu ứng fade-in
            setIsVisible(true);
            await new Promise(resolve => setTimeout(resolve, 1000)); // Giữ trạng thái fade-out sau 1 giây
            setIsVisible(false);
        };

        handleFade();
    }, [location]);
    return isVisible; // Trả về giá trị isVisible
}

export default useURLChange;
