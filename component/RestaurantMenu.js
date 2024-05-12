import React, { useState } from "react";
import { useEffect } from "react";
import { MENU_URL } from "./../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState([]);
  const [menuList, setMenuList] = useState([]);
  const { resId } = useParams();
  console.log(resId);
  const { name, costForTwoMessage, areaName, cloudinaryImageId, cuisines } =
    resInfo;
  useEffect(() => {
    fetchRestaurantMenuData();
  }, []);

  const fetchRestaurantMenuData = async () => {
    const data = await fetch(MENU_URL + resId);
    const response = await data.json();

    setResInfo(response?.data?.cards[2]?.card?.card?.info);
    setMenuList(
      response?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card?.itemCards
    );
  };
  console.log(resInfo);
  return menuList.length <= 0 ? (
    <Shimmer />
  ) : (
    <div className="restaurant-wrapper">
      <div className="restaurant-info">
        <div>
          <h1>{name}</h1>
          <h3>{cuisines.join(", ")}</h3>
          <h3>{costForTwoMessage}</h3>
          <h3>{areaName}</h3>
        </div>
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            cloudinaryImageId
          }
        />
      </div>

      {menuList.map((menu) => {
        const { name, price, avgRating, description, imageId } =
          menu?.card?.info;
        return (
          <div className="menu-item-wrapper">
            <div>
              <h3>{name}</h3>
              <h3>{price / 100} for 2 persons</h3>
              <p>{avgRating}</p>
              <p>{description}</p>
            </div>
            <img
              className="menu-image"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/" + imageId
              }
            />
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
