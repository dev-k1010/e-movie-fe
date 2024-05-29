import React, { memo, useEffect, useState } from "react";
import { dataImage } from "./ImageFooter";

function Footer() {
  const anhFooter = dataImage;
  const text = 'The project was implemented by "KHANG KHÔ KHỐC".';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let currentIndex = 0; // theo dõi index hiện tại

    const displayNextChar = () => {
      // Nếu index hiện tại vượt quá số ký tự trong text, reset index về 0 và gọi lại hàm sau 1000ms
      if (currentIndex >= text.length) {
        setTimeout(() => {
          setIndex(0);
          currentIndex = 0; 
          displayNextChar(); 
        }, 1000)
      } 
      // Nếu chưa hết text, hiển thị ký tự tiếp theo
      else {
        setIndex(currentIndex);
        currentIndex++; 
        setTimeout(displayNextChar, 100); 
      }
    };

    displayNextChar();

    return () => clearTimeout();
  }, [text]);


  return (
    <div className="bg-black">
      <div className="pt-10">
        <div className="grid grid-cols-4 bg-black mx-40">
          {/* TIX */}
          <div className=" col-span-1 text-white space-y-5">
            <h2 className="text-xl font-semibold ">TIX</h2>
            <div className="space-y-2 text-gray-300">
              <p className="hover:text-color4">FAQ</p>
              <p className="hover:text-color4">Brand Guidelines</p>
              <p className="hover:text-color4">Thỏa thuận sử dụng</p>
              <p className="hover:text-color4">Chính sách bảo mật</p>
            </div>
          </div>
          {/* Đố tác */}
          <div className=" col-span-1 text-white space-y-5">
            <h2 className="text-xl font-semibold text-center">ĐỐI TÁC</h2>
            <div className="align-top">
              <div className="grid md:grid-cols-3 grid-cols-2 justify-items-center">
                {anhFooter.map((item, index) => (
                  <div
                    key={index}
                    className="h-10 w-10 small_wh rounded-full mb-4"
                    style={{
                      backgroundImage: `url(${item.url})`,
                      backgroundSize: "cover",
                    }}
                  >
                    <a
                      href={item.href}
                      className="hover:text-white cursor-pointer h-full w-full inline-block"
                      style={{
                        color: "#9e9e9e",
                      }}
                    ></a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-2 grid grid-cols-2 grid-rows-2">
            {/* MOBILE APP */}
            <div className=" col-span-1  text-white space-y-5 ">
              <h2 className="text-xl font-semibold text-center">MOBILE APP</h2>
              <div className="flex justify-center space-x-5">
                <div
                  className="h-10 w-10 small_wh mb-4 rounded-full"
                  style={{
                    backgroundImage:
                      "url(https://logos-world.net/wp-content/uploads/2021/02/App-Store-Logo.png)",
                    backgroundSize: "cover",
                    backgroundPosition: " center center ",
                  }}
                >
                  <a
                    href="https://www.apple.com/vn/app-store/"
                    className="hover:text-white cursor-pointer h-full w-full inline-block"
                    style={{
                      color: "#9e9e9e",
                    }}
                  ></a>
                </div>
                <div
                  className="h-10 w-10 small_wh   rounded-full bg-white"
                  style={{
                    backgroundImage: `url( 'IMG/gg-play.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: " 2px center",
                  }}
                >
                  <a
                    href="https://play.google.com/"
                    className="hover:text-white cursor-pointer h-full w-full inline-block"
                    style={{
                      color: "#9e9e9e",
                    }}
                  ></a>
                </div>
              </div>
            </div>

            {/*LIÊN HỆ */}
            <div className=" col-span-1 text-white space-y-5 ">
              <h2 className="text-xl font-semibold text-center">LIÊN HỆ</h2>
              <div className="flex justify-center space-x-5">
                <div
                  className="h-10 w-10 small_wh  rounded-full mb-4"
                  style={{
                    backgroundImage: `url( 'IMG/fb_icon.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: " 0 0",
                  }}
                >
                  <a
                    href="https://www.facebook.com"
                    className="hover:text-white cursor-pointer h-full w-full inline-block"
                    style={{
                      color: "#9e9e9e",
                    }}
                  ></a>
                </div>
                <div
                  className="h-10 w-10 small_wh   rounded-full bg-white"
                  style={{
                    backgroundImage: `url( 'IMG/zalo-icon.jfif')`,
                    backgroundSize: "cover",
                    backgroundPosition: " 0 0",
                  }}
                >
                  <a
                    href="https://zalo.me/pc"
                    className="hover:text-white cursor-pointer h-full w-full inline-block"
                    style={{
                      color: "#9e9e9e",
                    }}
                  ></a>
                </div>
              </div>
            </div>

            {/* IMG */}
            <div className="flex justify-center items-center col-span-2 w-full">
              <div className="col-span-1 flex items-center">
                <div className="col-span-4 px-4 md:px-8" colSpan={2}>
                  <p className="text-lg text-white font-mono px-8 py-4 bg-cyan-500 shadow-2xl shadow-cyan-500/50 rounded-lg hover:cursor-pointer">
                    <span style={{ display: 'inline-block', overflow: 'hidden' }}>
                      {text.split('').map((char, idx) => (
                        <span
                          key={idx}
                          style={{
                            opacity: idx <= index ? 1 : 0, 
                            animation: 'fadeIn 1s forwards, move 20s linear infinite',
                            animationDelay: `${idx * 0.5}s`, 
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {char}
                        </span>
                      ))}
                    </span>
                  </p>
                </div>
                <img
                  src="/icon.png"
                  className="w-24 mb-3 md:mx-8 lg:ml-0 lg:m-4"
                  alt="icon"
                />
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
}
export default memo(Footer);


