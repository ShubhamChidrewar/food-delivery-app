import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockdata";
//import ResList from "./ResList";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resObj);
  return (
    <div className="body-wrapper">
      <div className="search-wrapper">
        <input type="text" placeholder="Search Restaurants ..." />
        <button className="search-restaurant" onClick={() => {}}>
          Search
        </button>
        <button
          className="search-restaurant"
          //onClick={setListOfRestaurants()}
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurants-wrapper">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
