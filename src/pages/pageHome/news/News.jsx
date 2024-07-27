import { Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import axios from "axios";
import React, { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-scroll";

function News() {
  const [newsDienAnhMore, setNewsDienAnhMore] = useState(null);
  const [newsReviewMore, setNewsReviewMore] = useState(null);
  const [newsKhuyenMaiMore, setNewsKhuyenMaiMore] = useState(null);
  const [value, setValue] = useState(0);
  const [seeMore, setSeeMore] = useState({ 0: false, 1: false, 2: false });
  const navigate = useNavigate()

  const handleImageClick = () => {
    navigate('/error404');
  };
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const callAxios = (url, setState, tabKey) => {
    return axios({
      url,
      method: "GET",
    })
      .then((result) => {
        setState(result.data);
        setSeeMore((prev) => ({ ...prev, [tabKey]: true }));
      })
      .catch((error) => console.log(error));
  };

  const renderNews = (newsArr) => {
    return (
      <div className="space-y-5">
        <div className=" overflow-hidden">
          <div className="grid grid-cols-2 gap-5 ">
            {/* item0 */}
            <div onClick={handleImageClick}>
              <div>
                <a target="_blank" rel="noreferrer">
                  <img
                    alt="poster"
                    src={newsArr[0].img}
                    className="w-full h-full rounded-md"
                    loading="lazy"
                  />
                </a>
              </div>
              <a
                target="_blank"
                rel="noreferrer"
                className="text-base lg:text-xl text-color4 font-semibold hover:text-color1"
              >
                <p>{newsArr[0].title}</p>
              </a>
              <p className="text-start line-clamp-3 text-white">
                {newsArr[0].text}
              </p>
            </div>
            {/* item1 */}
            <div onClick={handleImageClick}>
              <div >
                <a target="_blank" rel="noreferrer">
                  <img
                    alt="poster"
                    src={newsArr[1].img}
                    className="w-full h-full rounded-md"
                    loading="lazy"
                  />
                </a>
              </div>
              <a
                target="_blank"

                rel="noreferrer"
                className="text-base lg:text-xl text-color4 font-semibold hover:text-color1"
              >
                <p>{newsArr[1].title}</p>
              </a>
              <p className="text-start line-clamp-3 text-white">
                {newsArr[1].text}
              </p>
            </div>
          </div>
        </div>

        <div className=" grid grid-cols-10 gap-5 ">
          <div className="col-span-6">
            <div className="grid grid-cols-2 gap-5">
              {/* item2 */}
              <div onClick={handleImageClick}>
                <div>
                  <a target="_blank" rel="noreferrer">
                    <img
                      alt="poster"
                      src={newsArr[2].img}
                      className="w-full h-full rounded-md"
                      loading="lazy"
                    />
                  </a>
                </div>
                <a
                  target="_blank"

                  rel="noreferrer"
                  className="text-base lg:text-xl text-color4 font-semibold hover:text-color1"
                >
                  <p>{newsArr[2].title}</p>
                </a>
                <p className="text-start line-clamp-3 text-white">
                  {newsArr[2].text}
                </p>
              </div>
              {/* item3 */}
              <div onClick={handleImageClick}>
                <div>
                  <a target="_blank" rel="noreferrer">
                    <img
                      alt="poster"
                      src={newsArr[3].img}
                      className="w-full h-full rounded-md"
                      loading="lazy"
                    />
                  </a>
                </div>
                <a
                  target="_blank"

                  rel="noreferrer"
                  className="text-base lg:text-xl text-color4 font-semibold hover:text-color1"
                >
                  <p>{newsArr[3].title}</p>
                </a>
                <p className="text-start line-clamp-3 text-white">
                  {newsArr[3].text}
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-4 grid grid-cols-1 gap-3">
            {/* item4 */}
            <div className="flex space-x-5 " onClick={handleImageClick}>
              <div>
                <a target="_blank" rel="noreferrer">
                  <img
                    alt="poster"
                    src={newsArr[4].img}
                    className="rounded-md w-20"
                    loading="lazy"
                  />
                </a>
              </div>
              <a
                target="_blank"

                rel="noreferrer"
                className="text-sm lg:text-lg text-color4 font-semibold hover:text-color1"
              >
                <p>{newsArr[4].title}</p>
              </a>
            </div>
            {/* item5 */}
            <div className="flex space-x-5" onClick={handleImageClick}>
              <div>
                <a target="_blank" rel="noreferrer">
                  <img
                    alt="poster"
                    src={newsArr[5].img}
                    className="rounded-md w-20"
                    loading="lazy"
                  />
                </a>
              </div>
              <a
                target="_blank"

                rel="noreferrer"
                className="text-sm lg:text-lg text-color4 font-semibold hover:text-color1"
              >
                <p>{newsArr[5].title}</p>
              </a>
            </div>
            {/* item6 */}
            <div className="flex space-x-5" onClick={handleImageClick}>
              <div>
                <a target="_blank" rel="noreferrer">
                  <img
                    alt="poster"
                    src={newsArr[6].img}
                    className="rounded-md w-20"
                    loading="lazy"
                  />
                </a>
              </div>
              <a
                target="_blank"

                rel="noreferrer"
                className="text-sm lg:text-lg text-color4 font-semibold hover:text-color1"
              >
                <p>{newsArr[6].title}</p>
              </a>
            </div>
            {/* item7 */}
            <div className="flex space-x-5" onClick={handleImageClick}>
              <div>
                <a target="_blank" rel="noreferrer">
                  <img
                    alt="poster"
                    src={newsArr[7].img}
                    className="rounded-md w-24"
                    loading="lazy"
                  />
                </a>
              </div>
              <a
                target="_blank"

                rel="noreferrer"
                className="text-sm lg:text-lg text-color4 font-semibold hover:text-color1"
              >
                <p>{newsArr[7].title}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const onClickSeeMore = () => {
    const actions = {
      0: {
        url: `https://60b9f19280400f00177b744b.mockapi.io/ArticlesDienAnh02`,
        setMore: setNewsDienAnhMore,
        more: newsDienAnhMore,
      },
      1: {
        url: `https://60babc8f42e1d0001761ff84.mockapi.io/ArticlesReview02`,
        setMore: setNewsReviewMore,
        more: newsReviewMore,
      },
      2: {
        url: `https://60babc8f42e1d0001761ff84.mockapi.io/ArticlesKhuyenMai02`,
        setMore: setNewsKhuyenMaiMore,
        more: newsKhuyenMaiMore,
      },
    };

    const action = actions[value];

    if (action) {
      if (!action.more) {
        callAxios(action.url, action.setMore, value);
      } else {
        setSeeMore((prev) => ({ ...prev, [value]: true }));
      }
    }
  };

  const onClickSeeLess = () => {
    setSeeMore((prev) => ({ ...prev, [value]: false }));
  };

  const itemsButton = [
    {
      key: "0",
      label: (
        <button className="text-lg lg:text-2xl transition duration-300 font-semibold rounded-lg shadow mr-2 hover:bg-white-500 text-white ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-color1 ">
          Điện ảnh 24H
        </button>
      ),
      children: (
        <>
          {seeMore[0] && newsDienAnhMore && renderNews(newsDienAnhMore)}
        </>
      ),
    },
    {
      key: "1",
      label: (
        <button className="text-lg lg:text-2xl transition duration-300 font-semibold rounded-lg shadow mr-2 hover:bg-white-500 text-white ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-color1 ">
          Review
        </button>
      ),
      children: (
        <>
          {seeMore[1] && newsDienAnhMore && renderNews(newsDienAnhMore)}
        </>
      ),
    },
    {
      key: "2",
      label: (
        <button className="text-lg lg:text-2xl transition duration-300 font-semibold rounded-lg shadow mr-2 hover:bg-white-500 text-white ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-color1 ">
          Khuyến mãi
        </button>
      ),
      children: (
        <>
          {seeMore[2] && newsDienAnhMore && renderNews(newsDienAnhMore)}
        </>
      ),
    },
  ];

  return (
    <div className="py-10 ">
      <Tabs
        defaultActiveKey="0"
        centered
        destroyInactiveTabPane={true}
        onChange={handleChange}
      >
        {itemsButton.map((item) => (
          <TabPane
            tab={<span className="text-black text-xs">{item.label}</span>}
            key={item.key}
          >
            {item.children}
          </TabPane>
        ))}
      </Tabs>
      <div className="flex flex-col justify-center items-center mt-5">
        <Button
          onClick={seeMore[value] ? onClickSeeLess : onClickSeeMore}
          className="px-4 py-2 text-white bg-color1 hover:transition hover:duration-500 hover:bg-color1/70 rounded-md"
          variant="outlined"
        >
          {seeMore[value] ? "RÚT GỌN" : "XEM THÊM"}
        </Button>
      </div>
    </div>
  );
}

export default memo(News);
