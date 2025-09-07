import {CDN_URI} from "../utils/constants";

const stayleCard = {
    backgroundColor: "pink",
};

const RestaurantCard = (props) => {
    const {resData} = props;

    // Destructure from resData.info for API data, fallback to resData for mock data
    const info = resData.info || resData;
    const {cloudinaryImageId, name, avgRating, cuisines, sla} = info;

    return (
        <div className="res-card" style={stayleCard}>
            <img
                className="res-logo"
                src={CDN_URI + cloudinaryImageId}
                alt="res-logo"
            />
            <h3>{name}</h3>
            <h4>{cuisines?.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>Delivery Time: {sla?.deliveryTime || 30} min</h4>
        </div>
    );
};

export default RestaurantCard;
