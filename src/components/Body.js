import RestaurantCard from "./RestaurantCard"; // This is a named import
import { useEffect, useState } from "react"; //This type import is called named import
import Shimmer from "./Shimmer";

const Body = () => {
  //State variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]); // Initializing with an empty array

  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  const fetchData = async () => {
    const data = await fetch("http://localhost:3000/api/restaurants");
    const json = await data.json();
    console.log(json);
    console.log(json.data.cards[1]);
    const restaurants =
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    // Safely access the restaurants array
    console.log(restaurants);
    // Update the state with the fetched restaurants
    setListOfRestaurants(restaurants);
  };

  // Conditional rendering based on the length of listOfRestaurants
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.avgRating > 4.0
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated restaurants
        </button>
      </div>
      <div className="search">Search</div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info?.id || restaurant.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
