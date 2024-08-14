import React, { memo, useCallback, useEffect, useMemo, useRef, useState, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs } from "antd";
import useTrailerPreview from "../../hooks/use_trailerpreview/useTrailerPreview";
import { movieTabsItems } from "../../constants/itemTabs/pageHome";
import { movieTabsSettings } from "../../constants/settingSlider/pageHome";
import "../movieTabs/style/style.css";
import Spinner from "../../components/spinner/spinner";

const CardItem = React.lazy(() => import("../../components/cardItem/Carditem"));
const SliderItem = React.lazy(() => import("../../components/sliderItem/SliderItem"));
const TrailerPreview = React.lazy(() => import("../../components/strailerPreview/StrailerPreview"));

/**
 * Component MovieTabs hiển thị các tab phim với khả năng lọc phim theo trạng thái.
 * @param {Array} listPhim - Danh sách phim để hiển thị.
 * @returns {JSX.Element}
 */
const MovieTabs = ({ listPhim }) => {
 
  const navigate = useNavigate();
  const [activeKey, setActiveKey] = useState(2);
  const { isOpen, selectedPhim, handleOpen, handleClose } = useTrailerPreview();

  const onTabClick = useCallback((key) => {
    if (key !== activeKey) setActiveKey(key);
  }, [activeKey]);

  const filterMovies = useCallback((key) => {
    const filterConditions = {
      2: listPhim => listPhim.dangChieu === true,
      3: listPhim => listPhim.dangChieu === false,
    };

    const filterFn = filterConditions[key];


    return filterFn ? listPhim.filter(filterFn) : [];
  }, [listPhim]);


  const createCardItems = useCallback((movies) => {
    return movies.map((movie) => (
      <div key={movie.maPhim} className="px-2">
        <CardItem movie={movie} navigate={navigate} handleOpen={handleOpen} isVirtual={""} />
      </div>
    ));
  }, [navigate, handleOpen]);
  

  const renderSlider = useMemo(() => {
    const movie = filterMovies(activeKey)
    const settings = movieTabsSettings(movie.length);
    const cardItems = createCardItems(movie);

    return <SliderItem settings={settings} items={cardItems} />;
  }, [activeKey, filterMovies, createCardItems]);



  const items = useMemo(() => movieTabsItems.map(tab => ({
    ...tab,
    children: tab.key === activeKey ? renderSlider : null,
  })), [activeKey, renderSlider]);

  return (
    <Suspense fallback={<Spinner isLoading={true} />}>
      <div className="MovieTabs overflow-clip h-[570px]">
        <Tabs
          className="tabs"
          activeKey={activeKey}
          onChange={onTabClick}
          destroyInactiveTabPane
          items={items}
          defaultActiveKey={2}
        />
      </div>
      {isOpen && selectedPhim && (
        <TrailerPreview
          isOpen={isOpen}
          selectedPhim={selectedPhim.trailer}
          handleClose={handleClose}
        />
      )}
    </Suspense>
  );
};

export default memo(MovieTabs);
