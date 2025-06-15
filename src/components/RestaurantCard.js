import { CDN_URI } from "../utils/constants";

const stayleCard = {
  backgroundColor: "gray",
};

const RestaurantCard = (props) => {
  //This called as destrucuring
  //const { resName, cuisine } = props;

  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines } = resData;
  return (
    <div className="res-card" style={stayleCard}>
      <img
        className="res-logo"
        src={CDN_URI + cloudinaryImageId}
        alt="res-logo"
      />

      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>Delivery Time: 30 min</h4>
    </div>
  );
};

export default RestaurantCard;
