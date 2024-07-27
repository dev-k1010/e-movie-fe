import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thongTinTaiKhoan } from "../../../stores/quanLyNguoiDungReducer/quanLyNguoiDungReducer";
import moment from "moment";

export default function KetQuaDatVe() {
    const dispatch = useDispatch();
    const { ttTaiKhoan } = useSelector((state) => state.quanLyNguoiDungReducer);
    const { ketQuaDatVe } = useSelector((state) => state.quanLyDatVeReducer);
  
    useEffect(() => {
      dispatch(thongTinTaiKhoan());
    }, [ketQuaDatVe]);
  
    return (
      <div className="KetQuaDatVe">
        <div className="text-lg font-semibold border-b p-3 bg-white ">
          <span>Tài khoản: </span>
          <span className="text-amber-500 mr-2">{ttTaiKhoan?.taiKhoan} | </span>
          <span>Email: </span>
          <span className="text-amber-500 mr-2">{ttTaiKhoan?.email} | </span>
          <span>Họ tên: </span>
          <span className="text-amber-500 mr-2">{ttTaiKhoan?.hoTen} | </span>
          <span>Số điện thoại: </span>
          <span className="text-amber-500">{ttTaiKhoan?.soDT}</span>
        </div>
        <div>
          {ttTaiKhoan?.thongTinDatVe.map((ve, i) => (
            <div key={i} className="py-2 border-b grid grid-cols-12">
              <div className="col-span-4 md:col-span-2 lg:col-span-1">
                <img src={ve.hinhAnh} alt="" className="w-full" loading="lazy" />
              </div>
              <div className="col-span-8 pl-3 md:col-span-3">
                <p className="m-0 text-xl font-bold text-amber-500">
                  {ve.tenPhim}
                </p>
                <p className="m-0 text-green-500">
                  Thời lượng phim: {ve.thoiLuongPhim}p
                </p>
                <p className="m-0 text-amber-500">
                  Ngày đặt: {moment(ve.ngayDat).format("HH:mm DD-MM-YYYY")}
                </p>
              </div>
              <div className="col-span-12 md:col-span-7 md:pl-3">
                <p className="m-0 font-semibold text-white">Danh sách ghế</p>
                {ve.danhSachGhe.map((ghe, i) => (
                  <div key={i}>
                    <span className="font-semibold text-white">Ghế: </span>
                    <span className="text-amber-500">{ghe.tenGhe} - </span>
  
                    <span className="text-amber-500">{ghe.tenRap} - </span>
                    <span>/</span>
                    <span className="text-amber-500">{ghe.tenHeThongRap}</span>
                  </div>
                ))}
              </div>
              <div className="col-span-12 lg:col-span-1">
                <p>
                  <span className="font-semibold">Tổng tiền:</span>{" "}
                  <span className="text-amber-500 text-xl font-semibold">
                    {(ve.giaVe * ve.danhSachGhe.length).toLocaleString()}đ
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }