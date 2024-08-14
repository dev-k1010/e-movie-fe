import React, { memo, useCallback, useMemo } from "react";
import Slider from "react-slick";
import TrailerPreview from "../../components/strailerPreview/StrailerPreview";
import FadeIn from "../../components/fadeIn/FadeIn";
import LottieAnimation from "../../components/lottieAnimation/LottieAnimation";
import useURLChange from "../../hooks/use_url_change/useURLChange";
import useTrailerPreview from "../../hooks/use_trailerpreview/useTrailerPreview";
import { bannerSettings } from "../../constants/settingSlider/pageHome";
import "../banner/style/style.css";

// Dữ liệu tĩnh về các trailer, có thể được lưu trữ ở nơi khác nếu cần
const trailerItems = [
  { trailer: "kBY2k3G6LsM&t=4s" },
  { trailer: "kBY2k3G6LsM&t=4s" },
  { trailer: "kBY2k3G6LsM&t=4s" },
];

/**
 * Hook để tính toán lớp CSS cho hình ảnh, dựa trên trạng thái `isVisible`.
 * 
 * - `isVisible` quyết định lớp CSS nào sẽ được áp dụng: phóng to hoặc không.
 * - Chỉ tính toán lại lớp CSS khi `isVisible` thay đổi.
 * 
 * @param {boolean} isVisible - Trạng thái hiển thị của phần tử.
 * @returns {string} - Chuỗi lớp CSS được tính toán.
 */
const useImageClass = (isVisible) =>
  useMemo(() => (
    `w-full h-full lg:px-9 transition-transform duration-700 ease-in-out ${isVisible ? 'scale-[1.0685]' : 'scale-100'} flex justify-center items-center`
  ), [isVisible]);

/**
 * Component Banner hiển thị các hình ảnh và trailer preview.
 * 
 * @param {Array} listBanner - Danh sách các banner để hiển thị.
 * @returns {JSX.Element}
 */
function Banner({ listBanner }) {
  // Hook để kiểm tra sự thay đổi của URL
  const isVisible = useURLChange();

  // Hook để quản lý trạng thái mở/đóng của Trailer Preview
  const { isOpen, selectedPhim, handleOpen, handleClose } = useTrailerPreview();

  // Tính toán lớp CSS cho hình ảnh dựa trên trạng thái isVisible
  const imageClass = useImageClass(isVisible);

  /**
   * Hàm render từng item của slider.
   * 
   * @param {Object} banner - Đối tượng banner chứa thông tin hình ảnh và trailer.
   * @param {number} index - Chỉ số của banner trong danh sách.
   * @returns {JSX.Element} - Phần tử JSX đại diện cho một banner.
   */
  const renderBannerItem = useCallback((banner, index) => (
    <div key={banner.maBanner} className="w-full h-[250px] lg:h-[450px]">
      <div
        style={{
          backgroundImage: `url(${banner.hinhAnh})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className={imageClass}
      >
        {!isOpen && (
          <button
            className="w-36 h-28 flex justify-center items-center"
            onClick={() => handleOpen(`https://www.youtube.com/watch?v=${trailerItems[index].trailer}`)}
          >
            <LottieAnimation nameAnimation="buttonYoutube" />
          </button>
        )}
      </div>
    </div>
  ), [imageClass, isOpen, handleOpen]);

  return (
    <>
      <div className="relative z-0 Banner">
        {/* Sử dụng Slider component từ react-slick để hiển thị danh sách banner */}
        <Slider {...bannerSettings}>
          {listBanner.map(renderBannerItem)}
        </Slider>
        {/* Hiệu ứng FadeIn */}
        <FadeIn />
      </div>
      {/* Hiển thị TrailerPreview khi isOpen là true */}
      {isOpen && <TrailerPreview isOpen={isOpen} selectedPhim={selectedPhim} handleClose={handleClose} />}
    </>
  );
}

// Sử dụng memo để tránh render lại không cần thiết khi props không thay đổi
export default memo(Banner);
