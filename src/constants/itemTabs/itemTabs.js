const movieTabsItems = [
    {
        key: 0,
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
        key: 1,
        label: <div className="text-lg md:text-md font-light">Đang chiếu</div>,
        children: null,
        disabled: false,
    },
    {
        key: 2,
        label: <div className="text-lg md:text-md font-light">Sắp chiếu</div>,
        children: null,
        disabled: false,
    },
];



const newsTabsItems = [
    {
        key: 0,
        label: (
            <div className="flex justify-start items-center space-x-3">
                <div className="h-8 w-[5px] bg-color1"></div>
                <div className="font-sans font-normal text-lg md:text-2xl transition duration-300  rounded-lg shadow hover:bg-white-500 cursor-text text-white uppercase">
                    Điện ảnh 24h
                </div>
            </div>
        ),
        disabled: true,
        children: null,
    },
    {
        key: 1,
        label: (
            <button className="text-sm lg:text-xl transition duration-300 font-normal rounded-lg shadow mr-2 hover:bg-white-500 text-white ease-in-out hover:text-[#cdcdcd] ">
                Blog điện ảnh
            </button>
        ),
        children: null,
        disabled: false,
    },
    {
        key: 2,
        label: (
            <button className="text-sm lg:text-xl transition duration-300 font-normal rounded-lg shadow mr-2 hover:bg-white-500 text-white ease-in-out hover:text-[#cdcdcd] ">
                Review
            </button>
        ),
        children: null,
        disabled: false,
    },
];

export { movieTabsItems, newsTabsItems }