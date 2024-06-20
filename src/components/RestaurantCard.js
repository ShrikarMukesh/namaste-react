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
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7"
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
