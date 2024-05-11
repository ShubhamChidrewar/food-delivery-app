import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { API_URL } from "../utils/constants";
//import ResList from "./ResList";

const Body = () => {
  // State Variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");
  //useEffect Hook
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const response = await data.json();
    console.log(response);

    // Optional Chaining
    setListOfRestaurants(
      response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(
      response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  // Conditional Rendering
  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body-wrapper">
      <div className="search-wrapper">
        <input
          id="searchField"
          type="text"
          placeholder="Search Restaurants ..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-restaurant"
          onClick={() => {
            //console.log(searchText);
            const searchedRestaurants = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText)
            );
            console.log(searchedRestaurants);
            setFilteredRestaurants(searchedRestaurants);
          }}
        >
          Search
        </button>
        <button
          className="top-restaurant"
          //onClick={setListOfRestaurants()}
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4.2
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurants-wrapper">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
  //   }
};

export default Body;
