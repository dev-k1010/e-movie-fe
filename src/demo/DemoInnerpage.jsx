import React from "react";
import BorderedContainer from "../components/ui/BorderedContainer";
import DemoItemInnerpage from "./DemoItemInnerpage";
export default function DemoInnerpage() {
  return (
    <div className="grid grid-cols-2 w-full h-screen bg-black ">
      {/* left */}
      <div className="bg-[#cdcdcd] col-span-1 h-screen grid grid-rows-7">
        <DemoItemInnerpage />
        <DemoItemInnerpage
          mainText="giới thiệu"
          hoverText="About"
          index="(2)"
        />
        <DemoItemInnerpage mainText="liên hệ" hoverText="Contact" index="(3)" />
        <DemoItemInnerpage mainText="liên hệ" hoverText="Contact" index="(4)" />
        <DemoItemInnerpage mainText="liên hệ" hoverText="Contact" index="(5)" />
        <DemoItemInnerpage mainText="liên hệ" hoverText="Contact" index="(6)" />
        <DemoItemInnerpage mainText="liên hệ" hoverText="Contact" index="(7)" />
      </div>

      {/* right */}
      <div className="col-span-1 grid grid-rows-7 font-serif text-[#cdcdcd]">
        {/* top */}
        <div className="row-span-6 grid grid-rows-2">
          <div className="h-full flex justify-center items-center row-span-1">
            {/* logo */}
            <div>
              <BorderedContainer>
                <div className="px-32 flex flex-col justify-center items-center">
                  <img
                    src="/logo.jpg"
                    alt="Logo"
                    className="w-[15vw] h-[9.5vw] object-contain"
                  />
                </div>
              </BorderedContainer>
            </div>
          </div>

          <div className="row-span-1 border-b border-[#cdcdcd]">
            <div className="grid grid-cols-2 gap-x-12 px-20 md:px-[300px] w-full">
              {/* Cột trái */}
              <div className="grid grid-rows-3 space-y-4">
                {/* Email */}
                <div className="flex flex-col items-start">
                  <span className="uppercase font-semibold text-gray-300 text-lg">
                    Email
                  </span>
                  <span className="uppercase text-[11px]">
                    contact@pkey.com
                  </span>
                </div>
                {/* Phone */}
                <div className="flex flex-col items-start">
                  <span className="uppercase font-semibold text-gray-300 text-lg">
                    Phone
                  </span>
                  <span className="uppercase text-[11px]">+84 3-1234-5678</span>
                </div>
                {/* Social */}
                <div className="flex flex-col items-start">
                  <span className="uppercase font-semibold text-gray-300 text-lg">
                    Social
                  </span>
                  <div className="flex flex-col space-y-1">
                    <span className="uppercase text-[11px]">instagram</span>
                    <span className="uppercase text-[11px]">facebook</span>
                    <span className="uppercase text-[11px]">Twitter (x)</span>
                  </div>
                </div>
              </div>
              {/* Cột phải */}
              <div className="grid grid-rows-3 space-y-4">
                {/* Office */}
                <div className="flex flex-col items-start">
                  <span className="uppercase font-semibold text-gray-300 text-[16.48px]">
                    Office
                  </span>
                  <span className="uppercase text-[12.16px]">
                    1-1-2 Oshiage, Sumida City, 131-0045, Tokyo, Japan
                  </span>
                </div>
                {/* Hours */}
                <div className="flex flex-col justify-center items-start">
                  <span className=" text-[11px]">Monday to Friday:</span>
                  <span className="uppercase text-[11px]">
                    9:00 AM - 6:00 PM
                  </span>
                </div>
                {/* Legal */}
                <div className="flex flex-col items-start">
                  <span className="uppercase font-semibold text-gray-300 text-lg">
                    Legal
                  </span>
                  <span className="uppercase text-[11px]">Privacy Policy</span>
                  <span className="uppercase text-[11px]">
                    Terms of Service
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="row-span-1 h-full grid grid-cols-2 gap-12 px-[300px] justify-center items-center">
          <div className="col-span-1 uppercase text-[10px]">*disclaimer</div>
          <div className="col-span-1 uppercase text-[10px]">
            2025-pkey cinema
          </div>
        </div>
      </div>
    </div>
  );
}
