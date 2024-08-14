import Lottie from 'lottie-react';
import buttonYoutube from './jsonAnimation/buttonYoutube.json';
import bgError from './jsonAnimation/bgError.json';
import error404 from './jsonAnimation/error404.json';
import anhdaden from './jsonAnimation/anhdaden.json';
import monkey from './jsonAnimation/monkey.json';
import success from './jsonAnimation/success.json';
import { memo } from 'react';

// Tạo một đối tượng map các animation
const animations = {
    buttonYoutube,
    bgError,
    error404,
    anhdaden,
    monkey,
    success
};

/**
 * Hàm trả về đối tượng animation dựa trên tên.
 * 
 * @param {Object} props - Tham số của component.
 * @param {string} props.nameAnimation - Tên của animation cần lấy.
 * @param {string} props.classCss - Các lớp CSS để áp dụng cho Lottie.
 * @returns {JSX.Element} - Đối tượng chứa animation tương ứng.
 */
function LottieAnimation({ nameAnimation, classCss }) {
    // Lấy animation data từ đối tượng animations hoặc null nếu không tìm thấy
    const animationData = animations[nameAnimation] || null;

    return <Lottie className={classCss} animationData={animationData} loop={true} />;
}

export default memo(LottieAnimation)