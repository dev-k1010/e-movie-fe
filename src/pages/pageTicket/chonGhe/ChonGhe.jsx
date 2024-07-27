import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { datVe, layDanhSachPhongVe, quanLyDatVeActions } from "../../../stores/quanLyDatVeReducer/quanLyDatVeReducer";
import { Modal, Result } from "antd";
import Lottie from "lottie-react";
import monkeyanimation from "../../../animation/ticket/monkeyamination.json";
import anhdaden from "../../../animation/ticket/anhdaden.json";
import animateSrcSuccess from "../../../animation/ticket/successamination.json";
import io from "socket.io-client";
import { WarningOutlined } from "@ant-design/icons";


const showModal = (title, content) => {
    Modal.error({
        content: (
            <div className="relative flex flex-col justify-center items-center space-y-3">
                <Lottie animationData={monkeyanimation} loop={true} className="w-60" />
                <p className="text-center text-color1 text-2xl font-semibold">{title}</p>
                <div className="flex flex-col justify-center items-center">{content}</div>
            </div>
        ),
        okButtonProps: {
            className: "bg-blue-600 hover:bg-blue-400 text-white",
        },
    });
};

const handleGheDaDat = () => {
    const content = (
        <>
            <p className="text-lg font-semibold">
                Không có
                <span className="text-color1 font-semibold"> CRUSH </span>
                mà đòi có <span className="text-color1 font-semibold"> GHẾ </span>
            </p>
            <p className="text-lg text-center font-semibold">Đó là người khác nói thế</p>
            <p className="text-lg text-center font-semibold">
                Cho dù bạn có
                <span className="text-color1 font-semibold"> Ế </span>, thì chúng tôi vẫn còn
                <span className="text-color1 font-semibold"> GHẾ</span> cho bạn chọn.
            </p>
        </>
    );
    showModal('MẤT GHẾ !', content);
};

const handleGheDangChon = () => {
    const content = (
        <>
            <p className="text-lg font-semibold">Một rừng không thể có hai hổ</p>
            <p>Một ghế không thể có hai người ngồi.</p>
            <p className="text-center">
                <span className="font-semibold text-color1">Cyber </span> còn có 160 ghế xin thí
                chủ hãy chọn ghế khác!
            </p>
        </>
    );
    showModal('XIN HÃY DỪNG TAY!', content);
};

const getClassNames = (ghe, danhSachGheDangDat) => {
    const { loaiGhe, daDat, dangChon, maGhe } = ghe;
    const classGheVip = loaiGhe === "Vip" ? "gheVip" : "";
    const classGheThuong = loaiGhe === "Thuong" ? "gheThuong" : "";
    const classGheDaDat = daDat ? "gheDaDat" : "";
    const classGheDangChon = dangChon ? "gheDangChon" : "";
    const classGheDangDat = danhSachGheDangDat.find(gheDangDat => gheDangDat.maGhe === maGhe) ? "gheDangDat" : "";

    let backgroundColorClass = "";
    if (daDat) {
        backgroundColorClass = "bg-color1 cursor-not-allowed";
    } else if (classGheDangDat) {
        backgroundColorClass = "bg-color2 hover:scale-110";
    } else if (classGheDangChon) {
        backgroundColorClass = "bg-color3 cursor-not-allowed";
    } else if (classGheThuong) {
        backgroundColorClass = "bg-white hover:scale-110";
    } else if (classGheVip) {
        backgroundColorClass = "bg-color4 hover:scale-110";
    }

    return `${backgroundColorClass} ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classGheDangChon}`;
};

const SeatLegend = ({ color, label }) => (
    <span className="whitespace-nowrap flex items-center">
        <button
            className={`${color} w-6 h-6 rounded lg:rounded-md shadow`}
            style={{ cursor: "default" }}
        ></button>
        <span className="ml-2">{label}</span>
    </span>
);

const InfoTicket = ({ title, content }) => (
    <div className="border-b py-3 flex justify-between">
        <p className="m-0 font-semibold">{title}</p>
        <p className="m-0 text-right">
            <span>{content}</span>
        </p>
    </div>

)




export default function ChonGhe() {
    const param = useParams();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem("UserLogin"));
    const { danhSachPhongVe, danhSachGheDangDat, ketQuaDatVe, errKetQuaDatVe } =
        useSelector((state) => state.quanLyDatVeReducer);
    const { danhSachGhe, thongTinPhim } = danhSachPhongVe;
    const danhSachVe = danhSachGheDangDat?.map((ghe) => {
        return { maGhe: ghe.maGhe, giaVe: ghe.giaVe };
    });
    const [listGhe, setListGhe] = useState();
    const socket = io("http://localhost:8080");

    useEffect(() => {
        dispatch(quanLyDatVeActions.huyErrKetQuaDatVe());
        // Xử lý khi kết nối thành công
        socket.on("connect", () => {
            console.log("a user connected");
        });
        socket.on("newSeatList", (updatedSeats) => {
            setListGhe(updatedSeats);
        });
        // Xử lý khi ngắt kết nối
        return () => {
            socket.emit("disconnectRequest");
            socket.disconnect();
        };
    }, []);
    useEffect(() => {
        setListGhe(danhSachGhe?.map((ghe) => ({ ...ghe, dangChon: false })));
    }, [danhSachGhe]);
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(layDanhSachPhongVe(param.malichchieu));
    }, [ketQuaDatVe]);


    const handleChonGhe = (ghe, user) => {
        if (ghe.daDat) {
            handleGheDaDat();
            return;
        }

        if (ghe.dangChon && ghe.taiKhoanNguoiDat !== user.taiKhoan) {
            handleGheDangChon();
            return;
        }

        let updatedSeats = listGhe.map((seat) => {
            if (seat.maGhe === ghe.maGhe) {
                // Nếu ghế đã được chọn bởi người dùng hiện tại, hủy chọn ghế đó
                if (seat.dangChon && seat.taiKhoanNguoiDat === user.taiKhoan) {
                    return { ...seat, dangChon: false, taiKhoanNguoiDat: null };
                } else {
                    // Nếu ghế chưa được chọn, chọn ghế và ghi lại thông tin người dùng đã chọn ghế này
                    return { ...seat, dangChon: true, taiKhoanNguoiDat: user.taiKhoan };
                }
            }
            return seat;
        });
        setListGhe(updatedSeats);
        socket.emit("updatedSeats", updatedSeats);
        dispatch(quanLyDatVeActions.danhSachGheDangDat(ghe));
    };

    return (
        <div className="ChonGhe pt-3">
            <div className="grid grid-cols-12">
                <div className="col-span-12 lg:col-span-8 pb-5 lg:pr-5">
                    <div>
                        <div className="h-3"></div>
                        <div className="w-11/12 h-0 m-auto text-center text-white text-xl border-b-[40px] border-white border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent drop-shadow-[0_12px_10px_#757373]">
                            Màn hình
                        </div>
                    </div>
                    {/* Danh sách ghế */}
                    <div className="pt-10 pb-3 text-center">
                        {listGhe?.map((ghe, i) => {

                            return (
                                <Fragment key={i}>
                                    <button
                                        onClick={() => {
                                            handleChonGhe(ghe, user);
                                        }}
                                        className={`w-4 h-4 m-[1px] text-[10px] sm:w-6 sm:h-6 sm:text-xs sm:m-1 md:w-8 md:h-8 md:m-[6px] md:text-base lg:w-9 lg:h-9 lg:m-[8px] xl:w-9 xl:h-9 shadow transition duration-300 ease-in-out transform rounded lg:rounded-md  ${getClassNames(ghe, danhSachGheDangDat)}`}
                                    >
                                        {ghe.daDat === true ? "X" : ghe.stt}
                                    </button>
                                    {(i + 1) % 16 === 0 ? <br /> : ""}
                                </Fragment>
                            );
                        })}
                    </div>
                    {/* Chú thích các loại ghế */}
                    <div className="border-t pt-3 text-center text-white flex space-x-5 justify-center items-center ">
                        <div className="flex flex-wrap gap-4">
                            <SeatLegend color="bg-white" label="Ghế thường" />
                            <SeatLegend color="bg-yellow-500" label="Ghế VIP" />
                            <SeatLegend color="bg-color2" label="Ghế đang chọn" />
                            <SeatLegend color="bg-color1" label="Ghế đã đặt" />
                            <SeatLegend color="bg-color3" label="Ghế đang có người chọn" />
                        </div>

                    </div>
                </div>
                {/* Thông tin đặt vé */}
                <div className="col-span-12 lg:col-span-4 border p-3 shadow-lg text-base bg-white rounded-lg">

                    <div className="border-b text-center flex pb-3 items-center">
                        <img
                            src={thongTinPhim?.hinhAnh}
                            alt=""
                            className="w-1/4"
                            loading="lazy"
                        />
                        <p className=" font-bold text-4xl m-0 text-center flex-1">
                            {thongTinPhim?.tenPhim}
                        </p>
                    </div>

                    <InfoTicket title={"Ngày chiếu giờ chiếu"} content={`${thongTinPhim?.ngayChieu}-${thongTinPhim?.gioChieu}`} />

                    <InfoTicket title={"Cụm rạp"} content={`${thongTinPhim?.tenCumRap}`} />

                    <InfoTicket title={"Địa chỉ"} content={`${thongTinPhim?.diaChi}`} />

                    <InfoTicket title={"Rạp"} content={`${thongTinPhim?.tenRap}`} />

                    <div className="border-b py-3 flex justify-between">
                        <p className="m-0 font-semibold w-20 ">Ghế chọn</p>
                        <div className="space-x-2 flex-1 text-right">
                            {danhSachGheDangDat.map((ghe, i) => (
                                <p className="m-0 text-right" key={i}>
                                    {ghe.loaiGhe === "Thuong" ? (
                                        <span >Thường</span>
                                    ) : (
                                        <span >{ghe.loaiGhe}</span>
                                    )}
                                    <span >/số-{ghe.stt}</span>
                                    <span >
                                        /Giá:{ghe.giaVe.toLocaleString()}đ
                                    </span>
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="border-b py-3 flex justify-between">
                        <p className="m-0 font-semibold">Ưu đãi</p>
                        <p className="m-0">0%</p>
                    </div>
                    <div className="border-b py-3 flex justify-between items-center">
                        <p className="m-0 font-semibold">Tổng tiền</p>
                        <p className="m-0 text-black-500 text-3xl font-bold">
                            {danhSachGheDangDat
                                .reduce((tongTien, ghe) => (tongTien += ghe.giaVe), 0)
                                .toLocaleString()}
                            đ
                        </p>
                    </div>
                    <div className="pt-3">
                        <button
                            onClick={() => {

                                dispatch(
                                    datVe({
                                        maLichChieu: param.malichchieu,
                                        danhSachVe:
                                            danhSachGheDangDat[0] === undefined
                                                ? "chưa chọn ghế"
                                                : danhSachVe,
                                    })
                                );
                            }}
                            className="bg-gray-500 w-full font-bold text-xl py-2 rounded-xl text-white hover:bg-gray-700 transition duration-300"
                        >
                            Đặt vé
                        </button>
                    </div>
                </div>
            </div>
            {/* Kiểm tra trước khi dispatch */}
            {ketQuaDatVe || errKetQuaDatVe ? (
                <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-black/50">
                    <div className="w-96 bg-black flex flex-col justify-center items-center rounded-lg">
                        {ketQuaDatVe ? (
                            <Result
                                status="success"
                                title={
                                    <div className="flex flex-col justify-center items-center">
                                        <span className="text-white">Đặt vé thành công </span>
                                    </div>
                                }
                                icon={<Lottie animationData={animateSrcSuccess} loop={true} />}
                            />
                        ) : null}
                        {errKetQuaDatVe ? (
                            <Result
                                status="warning"
                                title={
                                    <div className="flex flex-col justify-center items-center">
                                        <span className="text-color4 font-semibold">
                                            Bạn quên chọn ghế mất rồi{" "}
                                            <WarningOutlined className=" text-3xl" />
                                        </span>
                                    </div>
                                }
                                icon={<Lottie animationData={anhdaden} loop={true} />}
                            />
                        ) : null}
                        <button
                            onClick={() => {
                                dispatch(quanLyDatVeActions.huyErrKetQuaDatVe());
                            }}
                            className="py-3 px-7 rounded-lg bg-color4 text-white hover:bg-color4/60 mb-8"
                        >
                            OK
                        </button>
                    </div>
                </div>
            ) : (
                ""
            )}
        </div>
    );
}