import RestaurantCard from "./RestaurantCard";
import restaurantsObj from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("clicked");
          }}
        >
          Top Rated restaurants
        </button>
      </div>
      <div className="search">Search</div>
      <div className="res-container">
        {restaurantsObj.map((restaurant, index) => (
          <RestaurantCard key={index} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
