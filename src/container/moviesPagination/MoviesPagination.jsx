import React, { memo, useEffect, useState, useCallback } from "react";
import { Pagination } from "antd";
import { useNavigate } from "react-router-dom";
import { quanLyPhimServices } from "../../services/quanLyPhimServices";
import styled from "styled-components";
import CardFilm from "../../components/cardFilm/CardFilm";


function MoviesPagination({ listPhim }) {

    const navigate = useNavigate();
    const [soTrang, setSoTrang] = useState(1);
    const [phimPhanTrang, setPhimPhanTrang] = useState([]);
    const [soPhanTuTrenTrang, setSoPhanTuTrenTrang] = useState(10);
    const tongSoPhim = listPhim ? listPhim.length : 0;


    // Resize handler
    const handleResize = useCallback(() => {
        let currentWidth = window.innerWidth;
        let newSoPhanTuTrenTrang;

        if (currentWidth >= 1024) {
            newSoPhanTuTrenTrang = 10;
        } else if (currentWidth >= 768) {
            newSoPhanTuTrenTrang = 6;
        } else {
            newSoPhanTuTrenTrang = 4;
        }

        // Cập nhật trạng thái chỉ khi giá trị thay đổi
        setSoPhanTuTrenTrang(prev => {
            if (prev !== newSoPhanTuTrenTrang) {
                return newSoPhanTuTrenTrang;
            }
            return prev;
        });
    }, []);

    // Fetch paginated movie list
    const fetchPhimPhanTrang = useCallback(async () => {
        try {
            const result = await quanLyPhimServices.layDanhSachPhimPhanTrang(soTrang, soPhanTuTrenTrang);
            const phim = result.data.content.items;
            const realItemCount = phim.length;
            const newPhimPhanTrang = [...phim];

            if (realItemCount < soPhanTuTrenTrang) {
                const virtualItemCount = soPhanTuTrenTrang - realItemCount;
                for (let i = 0; i < virtualItemCount; i++) {
                    newPhimPhanTrang.push({ isVirtual: true, maPhim: `virtual_${i}` });
                }
            }

            setPhimPhanTrang(newPhimPhanTrang);
        } catch (err) {
            console.error("Error fetching paginated movies:", err);
        }
    }, [soTrang, soPhanTuTrenTrang]);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [handleResize]);

    useEffect(() => {
        fetchPhimPhanTrang();
    }, [fetchPhimPhanTrang]);

    const handlePageChange = useCallback((page) => {
        setSoTrang(page);
    }, []);

    const createCardItems = useCallback(() => {
        return phimPhanTrang.map((movie) => (
            <CardFilm movie={movie}
                isVirtual={movie.isVirtual} />
            // <CardItem
            //     movie={movie}
            //     isVirtual={movie.isVirtual}
            // />
        ))
    }, [navigate, phimPhanTrang]);

    return (

        <div className="w-full h-full">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-y-5  justify-center items-center">
                {createCardItems()}
            </div>
            <div className="py-3 flex items-center justify-center rounded-md">
                <StyledPagination
                    showTitle={false} // ẩn tiêu đề phụ
                    current={soTrang}
                    total={tongSoPhim}
                    pageSize={soPhanTuTrenTrang}
                    onChange={handlePageChange}
                />
            </div>

        </div>
    );
}

export default memo(MoviesPagination);


const StyledPagination = styled(Pagination)`

  .ant-pagination-item {
    width: 18px;
    height: 18px;
    min-width: 0;
    border-radius: 18px;
    background-color: #fff;
    margin: 0px 10px;
    position: relative; 
    transition: background-color 0.6s, transform 0.6s;
    z-index: 0;
  }

  .ant-pagination-item a {
    display:none;

  }

  .ant-pagination-item:not(.ant-pagination-item-active):hover {
    background-color: white;
    box-shadow: 0 0 20px rgb(255, 255, 255);
  }

  .ant-pagination-item-active {
    width: 18px;
    height: 18px;
    min-width: 0;
    border-radius: 18px;
    background-color: #d00000; /* Màu nền khi chọn */
    border: none;
    position: relative;

  }

  .ant-pagination-item:active:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 25px; 
    height: 25px; 
    background-color: rgba(255, 255, 255, 0.5); 
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    animation: ping 0.3s forwards;
    pointer-events: none; 
    z-index: 1; 
  }

  .ant-pagination-item.ant-pagination-item-active::before {
    background-color: rgba(208, 0, 0, 0.7); 
    animation: ping 0.6s forwards;
  }

  @keyframes ping {
    0% {
      transform: translate(-50%, -50%) scale(1); 
      opacity: 1;
    }
  
    100% {
      transform: translate(-50%, -50%) scale(2); 
      opacity: 0;
    }
  }

  .ant-pagination-prev .ant-pagination-item-link,
  .ant-pagination-next .ant-pagination-item-link {
    display: none;
  }

`;



