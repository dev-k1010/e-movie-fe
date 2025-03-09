import { Button, Calendar, DatePicker, TimePicker } from "antd";
import Search from "antd/es/input/Search";
import moment from "moment";
import React, { useState } from "react";

export default function TicketSearch({ listPhim }) {
    const [searchMode, setSearchMode] = useState("phim"); // "phim", "rap", "xuat"

    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };

    
    const demoLayout = () => (
        <>

            {/* Nút chọn chế độ tìm kiếm */}
            <div className="flex space-x-3 mb-5">
                <Button

                    onClick={() => setSearchMode("phim")}
                    className={`text-color1 bg-[#252525] border-none ${searchMode === "phim" ? "active" : ""}`}
                >
                    Phim
                </Button>
                <Button

                    onClick={() => setSearchMode("rap")}
                    className={`text-color1 bg-[#252525] border-none ${searchMode === "rap" ? "active" : ""}`}
                >
                    Rạp
                </Button>
                <Button

                    onClick={() => setSearchMode("xuat")}
                    className={`text-color1 bg-[#252525] border-none {${searchMode === "xuat" ? "active" : ""}`}
                >
                    Xuất chiếu
                </Button>
            </div>

            {/* Các container tìm kiếm độc lập */}
            <div className="relative w-full h-auto">

                {/* Container tìm kiếm Phim */}
                <div
                    className={`absolute top-0 left-0 w-full transition-transform duration-500 ${searchMode === "phim" ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                        }`}
                >
                    <Search placeholder="Tìm kiếm phim..." enterButton className="w-full" />
                </div>

                {/* Container tìm kiếm Rạp */}
                <div
                    className={`absolute top-0 left-0 w-full transition-transform duration-500 ${searchMode === "rap" ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                        }`}
                >
                    <Search placeholder="Tìm kiếm rạp..." enterButton className="w-full" />
                </div>

                {/* Container tìm kiếm Xuất chiếu */}
                <div
                    className={`absolute top-0 left-0  w-full transition-transform duration-500 ${searchMode === "xuat" ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                        } space-x-5`}
                >
                    <DatePicker
                        disabledDate={(current) => current && current > moment().endOf('day')} // Chặn ngày tương lai
                        format="DD/MM/YYYY" // Định dạng ngày
                    // onChange={handleDateChange}
                    />

                    <TimePicker
                        format={"HH"} // Chỉ hiển thị giờ
                        showMinute={false} // Ẩn phút
                        showSecond={false} // Ẩn giây
                        hideDisabledOptions // Ẩn các tùy chọn bị vô hiệu hóa
                        use12Hours={false} // Sử dụng định dạng 24 giờ
                    //  onChange={handleTimeChange}
                    />

                </div>
            </div>

        </>
    )

    return (
        <div className="w-full h-full overflow-hidden relative">
            {demoLayout()}
        </div>
    );
}
