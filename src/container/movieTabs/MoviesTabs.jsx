import React, { memo, useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs } from "antd";
import { movieTabsItems } from "../../constants/itemTabs/itemTabs";
import { movieTabsSettings } from "../../constants/settingSlider/settingSlider";
import SliderItem from "../../components/sliderItem/SliderItem";

import "../movieTabs/style/style.css";
import CardFilm from "../../components/cardFilm/CardFilm";


// const SliderItem = React.lazy(() => import("../../components/sliderItem/SliderItem"));
// const CardItem = React.lazy(() => import("../../components/cardItem/CardItem"));
// const TrailerPreview = React.lazy(() => import("../../components/strailerPreview/StrailerPreview"));

const MoviesTabs = ({ listPhim }) => {

  const navigate = useNavigate();
  const [activeKey, setActiveKey] = useState(1);

  /**
   * Set the state for activeKey based on the selected tab
   * @param {number} key - Value of tab select
   * If value "key" 
   */
  const onTabClick = useCallback((key) => {

    if (key !== activeKey) setActiveKey(key);

  }, [activeKey]);


  /**
   * Filter movies based on the condition of the selected tab
   * @param {number} key - value of variable "activeKey"
   * @returns {Array} - array movies have been filtered
   */
  const filterMovies = useCallback((key) => {

    const filterConditions = {
      1: listPhim => listPhim.dangChieu === true,
      2: listPhim => listPhim.dangChieu === false,
    };
    const filterFn = filterConditions[key];
    return filterFn ? listPhim.filter(filterFn) : [];

  }, [listPhim]);


  /**
   * Render the card with movie information
   * @param {Array} movies - the array of movies after filtering by the function "filterMovies"
   * @returns {Array<JSX.Element>} - An array of JSX elements representing "CardItem" components for each movie.
   */
  const renderCard = useCallback((movies) => {

    return movies.map((movie, index) => (
      <CardFilm key={index} movie={movie} />
    ));

  }, [navigate]);


  /**
   * Render the slider component containing the card with movie information
   * @param {number} key - value of variable "activeKey"
   * @returns {JSX.Element} - A JSX element representing the "SliderItem" component with the provided settings and card items.
   */
  const renderSlider = useCallback((key) => {

    const movie = filterMovies(key);
    const settings = movieTabsSettings(
      movie.length
    );

    const cardItems = renderCard(movie);

    return (

      <SliderItem settings={settings} items={cardItems} />

    );
  }, [filterMovies, renderCard]);



  const items = useMemo(() => movieTabsItems.map(tab => ({
    ...tab,
    children: tab.key === activeKey ? renderSlider(activeKey) : null,
  })), [activeKey, renderSlider]);

  return (
    <div >
      <div className="MovieTabs overflow-clip w-full h-full ">
        <Tabs
          className="tabs"
          activeKey={activeKey}
          onChange={onTabClick}
          destroyInactiveTabPane
          items={items}
          defaultActiveKey={1}
        />
      </div>

    </div>
  );
};

export default memo(MoviesTabs);
