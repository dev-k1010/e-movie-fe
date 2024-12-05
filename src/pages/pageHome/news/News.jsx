import { Tabs } from "antd";
import axios from "axios";
import React, { memo, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../news/style/style.css";
import { ArrowRightOutlined, LikeFilled, MessageOutlined } from "@ant-design/icons";
import { newsTabsItems } from "../../../constants/itemTabs/itemTabs";

function News() {
  const [newsData, setNewsData] = useState(null); // Lưu dữ liệu chung cho từng tab
  const [activeTab, setActiveTab] = useState(1); // Lưu tab đang được chọn
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate("/error404");
  };

  // Hàm gọi API dựa trên tab key
  const fetchNewsData = (tabKey) => {
    const urls = {
      "1": "https://60b9f19280400f00177b744b.mockapi.io/ArticlesDienAnh02",
      "2": "https://60babc8f42e1d0001761ff84.mockapi.io/ArticlesReview02",
    };

    const url = urls[tabKey];
    if (url) {
      axios
        .get(url)
        .then((result) => {
          console.log("🙂 ~ fetchNewsData ~ result:", result)
          return setNewsData(result.data)

        })
        .catch((error) => console.error(error));
    }
  };

  // Gọi dữ liệu khi tab được thay đổi
  useEffect(() => {
    fetchNewsData(activeTab);
  }, [activeTab]);

  const buttonLike = () => {
    return <button className="w-24 h-9 transition duration-300 flex justify-center items-center bg-blue-500 hover:bg-blue-600 rounded-md text-white space-x-1">
      <LikeFilled className="text-sm" />
      <span className="text-sm">Thích</span>
    </button>
  }
  const buttonComment = () => {
    return <button className="w-24 h-9 transition duration-300 flex justify-center items-center bg-[#252525] hover:bg-[#131313] rounded-md text-white space-x-1">
      <MessageOutlined className="text-md" />
    </button>
  }

  const renderNews = (newsArr) => {
    if (!newsArr || newsArr.length === 0) {
      return <p className="text-white">Không có dữ liệu hiển thị.</p>;
    }

    return (

      <div className="h-[400px] flex space-x-3">

        {newsArr.slice(0, 4).map((item) => (
          <div className="h-full w-[25%] group news-container rounded-lg overflow-hidden hover:cursor-pointer">

            <div class="card relative w-full h-full overflow-hidden rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-95">


              <img src={item.img} alt="Card Image" class="absolute w-full h-full z-0 object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.0531]" />


              <div className="absolute w-full h-full bottom-0 z-10 grid grid-cols-7 bg-black/10">

                <div className="col-span-6 w-full h-full space-y-3 p-3 flex flex-col justify-end">
                  <div
                    className="font-serif text-lg font-semibold text-white line-clamp-3 "
                  >
                    {item.title}
                  </div>
                  <div className="w-full flex justify-start items-center space-x-3">
                    {buttonLike()}
                    {buttonComment()}
                  </div>
                </div>

                <div className="col-span-1 relative">
                  <div className="w-full h-full flex items-end justify-center absolute bottom-5">
                    <ArrowRightOutlined className="news-arrow text-xl text-white" />
                  </div>

                </div>

              </div>

            </div>
          </div>

        ))}

      </div>

    );
  };

  const items = useMemo(() => newsTabsItems.map(tab => ({
    ...tab,
    children: tab.key === activeTab ? renderNews(newsData) : null,
  })), [activeTab, renderNews]);


  return (
    <div className="news flex flex-col justify-center items-center w-full h-full relative">

      <Tabs
        className="tabs w-full h-full z-0"
        defaultActiveKey={1}
        items={items} // Sử dụng thuộc tính items để truyền cấu hình
        onChange={(key) => setActiveTab(key)} // Xử lý sự kiện chuyển tab
        destroyInactiveTabPane
      />

      <button className="absolute w-28 h-14 right-5 bottom-40 flex flex-col justify-center items-center group space-y-1">
        <span className="flex justify-center items-center space-x-3 transition duration-300 text-white font-serif font-normal text-lg">
          <span>Xem tất cả</span>
          <ArrowRightOutlined className="text-lg" />
        </span>
        <div className="bg-color1 h-[0.5px] w-full transition duration-500 scale-x-0 group-hover:scale-x-100 block "></div>
      </button>

    </div>
  );
}

export default memo(News);
