import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import RestaurantCard from "./RestaurantCard";

const ResList = () => {
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const response = await data.json();
    console.log(response);
  };
  //   return <RestaurantCard resListData={response} />;
  //   const resList =
  //     data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
  //   console.log(resList);
};

export default ResList;
