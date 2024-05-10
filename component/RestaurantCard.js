import React from "react";
import ReactDOM from "react-dom";
import { useEffect } from "react";
import ResList from "./ResList";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData?.info;
  return (
    <div className="card-wrapper">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        className="restaurant-image"
      />
      <h3 className="res-name">{name}</h3>
      <h4 className="cuisines">{cuisines.join(", ")}</h4>
      <h4 className="rating">{avgRating}</h4>
      <h4 className="distance">{sla.deliveryTime} mins away</h4>
    </div>
  );
};

export default RestaurantCard;
