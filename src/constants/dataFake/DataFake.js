const imgEvent = [
    { imgSrc: "/IMG/sale-7.jpg" },
    { imgSrc: "/IMG/sale-8.jpg" },
    { imgSrc: "/IMG/sale-9.jpg" },
    { imgSrc: "/IMG/sale-10.jpg" },
    { imgSrc: "/IMG/sale-11.jpg" },
    { imgSrc: "/IMG/sale-12.jpg" },
    { imgSrc: "/IMG/sale-13.jpg" },
]

const contentEvent = [
    {
        id: 0,
        element: (
            <div className='w-full h-full flex flex-col justify-center items-center font-sans font-normal space-y-5'>
                <div className='w-full h-[10%] flex justify-center items-center'>
                    <span className='text-center uppercase text-lg text-color1'> yêu thì yêu - sale thì slae</span>
                </div>

                <div className='w-full h-[90%] overflow-y-auto space-y-3 text-white'>
                    <p className="text-sm">
                        Cặp đôi yêu nhau thì không thể bỏ lỡ! Mua vé xem phim ngay hôm nay với mức giảm giá siêu khủng dành cho cặp đôi:
                    </p>
                    <ul className=" text-sm list-disc list-inside space-y-3">
                        <li><strong>Giảm 15%</strong> cho 2 vé xem phim vào các ngày từ Thứ 2 đến Thứ 5.</li>
                        <li><strong>Giảm 25%</strong> khi mua thêm combo bắp nước</li>
                        <li><strong>Giảm 35%</strong> cho suất chiếu muộn sau 21h </li>
                        <li><strong>Giảm 50%</strong> vào Thứ Tư Vui Vẻ </li>
                    </ul>
                    <ul className=" text-sm list-disc list-inside space-y-3">
                        <li><strong>Giảm 15%</strong> cho 2 vé xem phim vào các ngày từ Thứ 2 đến Thứ 5.</li>
                        <li><strong>Giảm 25%</strong> khi mua thêm combo bắp nước</li>
                        <li><strong>Giảm 35%</strong> cho suất chiếu muộn sau 21h </li>
                        <li><strong>Giảm 50%</strong> vào Thứ Tư Vui Vẻ </li>
                    </ul>
                    <ul className=" text-sm list-disc list-inside space-y-3">
                        <li><strong>Giảm 15%</strong> cho 2 vé xem phim vào các ngày từ Thứ 2 đến Thứ 5.</li>
                        <li><strong>Giảm 25%</strong> khi mua thêm combo bắp nước</li>
                        <li><strong>Giảm 35%</strong> cho suất chiếu muộn sau 21h </li>
                        <li><strong>Giảm 50%</strong> vào Thứ Tư Vui Vẻ </li>
                    </ul>
                    <p className="text-sm text-color4 italic">
                        *Không áp dụng với các chương trình khác.
                    </p>
                </div>

            </div>
        )
    },
    {
        id: 1,
        element: (
            <div className='w-full h-full flex flex-col justify-center items-center text-[#e0e0e0] font-sans font-normal space-y-5'>
                <div className='w-full h-[10%] flex justify-center items-center'>
                    <span className='text-center uppercase text-lg font-medium text-color2'> yêu thì yêu - sale thì sale</span>
                </div>

                <div className='w-full h-[90%] overflow-y-auto space-y-3'>
                    <p className="text-sm">
                        Cặp đôi yêu nhau thì không thể bỏ lỡ! Mua vé xem phim ngay hôm nay với mức giảm giá siêu khủng dành cho cặp đôi:
                    </p>

                    <ul className=" text-sm list-disc list-inside space-y-3">
                        <li><strong>Giảm 15%</strong> cho 2 vé xem phim vào các ngày từ Thứ 2 đến Thứ 5.</li>
                        <li><strong>Giảm 25%</strong> khi mua thêm combo bắp nước</li>
                        <li><strong>Giảm 35%</strong> cho suất chiếu muộn sau 21h </li>
                        <li><strong>Giảm 50%</strong> vào Thứ Tư Vui Vẻ </li>
                    </ul>

                    <p className="text-sm text-color4 italic">
                        *Không áp dụng với các chương trình khác.
                    </p>
                </div>

            </div>
        )
    },
    {
        id: 2,
        element: (
            <div className='w-full h-full flex flex-col justify-center items-center text-[#e0e0e0] font-sans font-normal space-y-5'>
            <div className='w-full h-[10%] flex justify-center items-center'>
                <span className='text-center uppercase text-lg font-medium  text-pink-600'> yêu thì yêu - sale thì sale</span>
            </div>

            <div className='w-full h-[90%] overflow-y-auto space-y-3'>
                <p className="text-sm">
                    Cặp đôi yêu nhau thì không thể bỏ lỡ! Mua vé xem phim ngay hôm nay với mức giảm giá siêu khủng dành cho cặp đôi:
                </p>

                <ul className=" text-sm list-disc list-inside space-y-3">
                    <li><strong>Giảm 15%</strong> cho 2 vé xem phim vào các ngày từ Thứ 2 đến Thứ 5.</li>
                    <li><strong>Giảm 25%</strong> khi mua thêm combo bắp nước</li>
                    <li><strong>Giảm 35%</strong> cho suất chiếu muộn sau 21h </li>
                    <li><strong>Giảm 50%</strong> vào Thứ Tư Vui Vẻ </li>
                </ul>

                <p className="text-sm text-color4 italic">
                    *Không áp dụng với các chương trình khác.
                </p>
            </div>

        </div>
        )
    },
    {
        id: 3,
        element: (
            <div className='w-full h-full flex flex-col justify-center items-center text-[#e0e0e0] font-sans font-normal space-y-5'>
                <div className='w-full h-[10%] flex justify-center items-center'>
                    <span className='text-center uppercase text-lg font-medium  text-color4'> yêu thì yêu - sale thì sale</span>
                </div>

                <div className='w-full h-[90%] overflow-y-auto space-y-3'>
                    <p className="text-sm">
                        Cặp đôi yêu nhau thì không thể bỏ lỡ! Mua vé xem phim ngay hôm nay với mức giảm giá siêu khủng dành cho cặp đôi:
                    </p>

                    <ul className=" text-sm list-disc list-inside space-y-3">
                        <li><strong>Giảm 15%</strong> cho 2 vé xem phim vào các ngày từ Thứ 2 đến Thứ 5.</li>
                        <li><strong>Giảm 25%</strong> khi mua thêm combo bắp nước</li>
                        <li><strong>Giảm 35%</strong> cho suất chiếu muộn sau 21h </li>
                        <li><strong>Giảm 50%</strong> vào Thứ Tư Vui Vẻ </li>
                    </ul>

                    <p className="text-sm text-color4 italic">
                        *Không áp dụng với các chương trình khác.
                    </p>
                </div>

            </div>
        )
    },
    {
        id: 4,
        element: (
            <div className='w-full h-full flex flex-col justify-center items-center text-[#e0e0e0] font-sans font-normal space-y-5'>
            <div className='w-full h-[10%] flex justify-center items-center'>
                <span className='text-center uppercase text-lg font-medium text-teal-600'> yêu thì yêu - sale thì sale</span>
            </div>

            <div className='w-full h-[90%] overflow-y-auto space-y-3'>
                <p className="text-sm">
                    Cặp đôi yêu nhau thì không thể bỏ lỡ! Mua vé xem phim ngay hôm nay với mức giảm giá siêu khủng dành cho cặp đôi:
                </p>

                <ul className=" text-sm list-disc list-inside space-y-3">
                    <li><strong>Giảm 15%</strong> cho 2 vé xem phim vào các ngày từ Thứ 2 đến Thứ 5.</li>
                    <li><strong>Giảm 25%</strong> khi mua thêm combo bắp nước</li>
                    <li><strong>Giảm 35%</strong> cho suất chiếu muộn sau 21h </li>
                    <li><strong>Giảm 50%</strong> vào Thứ Tư Vui Vẻ </li>
                </ul>

                <p className="text-sm text-color4 italic">
                    *Không áp dụng với các chương trình khác.
                </p>
            </div>

        </div>
        )
    },
    {
        id: 5,
        element: (
            <div className='w-full h-full flex flex-col justify-center items-center text-[#e0e0e0] font-sans font-normal space-y-5'>
            <div className='w-full h-[10%] flex justify-center items-center'>
                <span className='text-center uppercase text-lg font-medium text-blue-500'> yêu thì yêu - sale thì sale</span>
            </div>

            <div className='w-full h-[90%] overflow-y-auto space-y-3'>
                <p className="text-sm">
                    Cặp đôi yêu nhau thì không thể bỏ lỡ! Mua vé xem phim ngay hôm nay với mức giảm giá siêu khủng dành cho cặp đôi:
                </p>

                <ul className=" text-sm list-disc list-inside space-y-3">
                    <li><strong>Giảm 15%</strong> cho 2 vé xem phim vào các ngày từ Thứ 2 đến Thứ 5.</li>
                    <li><strong>Giảm 25%</strong> khi mua thêm combo bắp nước</li>
                    <li><strong>Giảm 35%</strong> cho suất chiếu muộn sau 21h </li>
                    <li><strong>Giảm 50%</strong> vào Thứ Tư Vui Vẻ </li>
                </ul>

                <p className="text-sm text-color4 italic">
                    *Không áp dụng với các chương trình khác.
                </p>
            </div>

        </div>
        )
    },
    {
        id: 6,
        element: (
            <div className='w-full h-full flex flex-col justify-center items-center text-[#e0e0e0] font-sans font-normal space-y-5'>
            <div className='w-full h-[10%] flex justify-center items-center'>
                <span className='text-center uppercase text-lg font-medium text-purple-600'> yêu thì yêu - sale thì sale</span>
            </div>

            <div className='w-full h-[90%] overflow-y-auto space-y-3'>
                <p className="text-sm">
                    Cặp đôi yêu nhau thì không thể bỏ lỡ! Mua vé xem phim ngay hôm nay với mức giảm giá siêu khủng dành cho cặp đôi:
                </p>

                <ul className=" text-sm list-disc list-inside space-y-3">
                    <li><strong>Giảm 15%</strong> cho 2 vé xem phim vào các ngày từ Thứ 2 đến Thứ 5.</li>
                    <li><strong>Giảm 25%</strong> khi mua thêm combo bắp nước</li>
                    <li><strong>Giảm 35%</strong> cho suất chiếu muộn sau 21h </li>
                    <li><strong>Giảm 50%</strong> vào Thứ Tư Vui Vẻ </li>
                </ul>

                <p className="text-sm text-color4 italic">
                    *Không áp dụng với các chương trình khác.
                </p>
            </div>

        </div>
        )
    },
];

export { imgEvent, contentEvent }