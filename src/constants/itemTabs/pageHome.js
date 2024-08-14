export const movieTabsItems = [
    {
        key: 1,
        label: (
            <div className="flex justify-start items-center space-x-3">
                <div className="h-8 w-[5px] bg-color1"></div>
                <div className="text-lg md:text-2xl transition duration-300 font-light rounded-lg shadow hover:bg-white-500 cursor-text text-white">
                    PHIM
                </div>
            </div>
        ),
        children: null,
        disabled: true,
    },
    {
        key: 2,
        label: <div className="text-lg md:text-md font-light">Đang chiếu</div>,
        children: null,
        disabled: false,
    },
    {
        key: 3,
        label: <div className="text-lg md:text-md font-light">Sắp chiếu</div>,
        children: null,
        disabled: false,
    },
];