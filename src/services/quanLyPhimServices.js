import { api, MaNhom } from "../config/api";

export const quanLyPhimServices = {
  layDanhSachBanner: () => {
    return api.get("/api/QuanLyPhim/LayDanhSachBanner");
  },
  layDanhSachPhim: (keyword) => {
    return api.get(
      `/api/QuanLyPhim/LayDanhSachPhim?maNhom=${MaNhom}&${keyword}`
    );
  },
  layDanhSachPhimPhanTrang: (soTrang, soPhanTuTrenTrang) => {
    return api.get(
      `/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=${MaNhom}&soTrang=${soTrang}&soPhanTuTrenTrang=${soPhanTuTrenTrang}`
    );
  },
  themPhimUploadHinh: (data) => {
    return api.post(`/api/QuanLyPhim/ThemPhimUploadHinh`, data);
  },
  capNhatPhimUpload: (data) => {
    return api.post(`/api/QuanLyPhim/CapNhatPhimUpload`, data);
  },
  xoaPhim: (maPhim) => {
    return api.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
  },
};
